import Joi from "joi";

export default {
  verifyEmail: function ({ token }: { token: string }) {
    const schema = Joi.object({
      token: Joi.required(),
    });
    return schema.validate({ token });
  },
  signin: function ({ email, password }: { email: string; password: string }) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    return schema.validate({ email, password });
  },
  forgotPassword: function ({ email }: { email: string }) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
    });
    return schema.validate({ email });
  },
  resetPassword: function ({
    token,
    password,
  }: {
    token: string;
    password: string;
  }) {
    const schema = Joi.object({
      token: Joi.string().required(),
      password: Joi.string().required(),
    });
    return schema.validate({ token, password });
  },
  sendPhoneCode: function ({ phone }: { phone: string }) {
    const schema = Joi.object({
      phone: Joi.string().required(),
    });
    return schema.validate({ phone });
  },
  verifyPhoneCode: function ({ phone, code }: { phone: string; code: string }) {
    const schema = Joi.object({
      phone: Joi.string().required(),
      code: Joi.string().required(),
    });
    return schema.validate({ phone, code });
  },
};
