const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class CodigoTransaccionService {
  constructor() {}

  async create(data) {
    const newCodigoTransaccion = await models.CodigoTransaccion.create(data);
    return newCodigoTransaccion;
  }

  async find() {
    const rta = await models.CodigoTransaccion.findAll();
    return rta;
  }

  async getColumnsName() {
    const rta = await models.CodigoTransaccion.rawAttributes;
    return Object.keys(rta);
  }

  async findOne(id) {
    const codigoTrans = await models.CodigoTransaccion.findByPk(id, {
      include: ['tipoTransaccion']
    });
    if(!codigoTrans) {
      throw boom.notFound('codigo transaccion not found');
    }
    return codigoTrans;
  }

  async update(id, changes) {
    const codigoTrans = await this.findOne(id);
    const rta = await codigoTrans.update(changes);
    return rta;
  }

  async delete(id) {
    const codigoTrans = await this.findOne(id);
    await codigoTrans.destroy();
    return { id };
  }
}

module.exports = CodigoTransaccionService;
