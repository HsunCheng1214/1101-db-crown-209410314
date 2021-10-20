const db = require('../utils/database');

const Category_14 = class Category_14 {
  constructor(id, name, size, remote_url, local_url, link_url) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.remote_url = remote_url;
    this.local_url = local_url;
    this.link_url = link_url;
  }

  static async fetchAll() {
    try {
      let results = await db.query(`SELECT * from category_14`);
      return results.rows;
    } catch (e) {
      console.log('error', e);
    }
  }
};


module.exports = Category_14;