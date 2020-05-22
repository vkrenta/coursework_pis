import { hash } from 'bcryptjs';
import log from '../helpers/log';
import sendLetter from '../helpers/send-mail';
import { sign } from '../helpers/verify-email';
import { promises as fs } from 'fs';

const registerController = async (req, res, next) => {
  try {
    const { password, email, fullName, phone } = req.body;

    if (!(password && email && fullName && phone))
      return res.status(400).send({ message: 'Missing required fields' });

    const cPassword = await hash(password, Number(process.env.SALT_ROUNDS));

    log.info(cPassword);

    const token = sign(
      {
        fullName,
        password: cPassword,
        phone,
        email,
      },
      process.env.LINK_SECRET,
      '1d'
    );

    const link = `${process.env.LINK_ROUTE}/${token}`;
    log.info({ label: 'Created link', message: link });

    const htmlTemplate = (await fs.readFile('src/views/regconfirm.html'))
      .toString()
      .replace('{{fullName}}', fullName)
      .replace('{{link}}', link)
      .replace('{{exp}}', '1 дня');

    await sendLetter({
      to: email,
      subject: 'Підтвердіть свою електронну адресу',
      html: htmlTemplate,
    });

    res.status(200).send({
      message: `Лист з підтвердженням реєстрації надіслано на&nbsp;<strong>${email}</strong>`,
    });
  } catch (e) {
    next(e);
  }
};

export default registerController;
