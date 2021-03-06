const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class ChequesProductoService {
constructor() {}

  async create(data) {
    const newChequera = await models.ChequesProducto.create(data);
    return newChequera;
  }

  async find() {
    const rta = await models.ChequesProducto.findAll();
    return rta;
  }

  async getColumnsName() {
    const rta = await models.ChequesProducto.rawAttributes;
    return Object.keys(rta);
  }

  async findOne(id) {
    const chequera = await models.ChequesProducto.findByPk(id, {
      include: ['producto'],
    });
    if(!chequera) {
      throw new boom.notFound('Producto not found');
    }
    return chequera;
  }

  async update(id, changes) {
    const chequesProducto = await this.findOne(id);
    const rta = await chequesProducto.update(changes);
    return rta;
  }

  async delete(id) {
    const chequera = await this.findOne(id);
    await chequera.destroy();
    return { id };
  }
}

module.exports = ChequesProductoService;
