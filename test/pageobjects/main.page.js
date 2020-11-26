class Main {

    get filterBtn() { return $('#filterBtn') };
    get shoesGrid() { return $('#product_grid') };

    /**
    * Returns the color filter element
    * @param {string} color Filter color text
    */
    colorFilter(color) { return $('#filter_1').$(`//*[contains(text(),"${color}")]`) }

    /**
    * Return shoe matching the name from the product grid
    * @param {string} name Product/shoe name
    */
    shoe(name) { return this.shoesGrid.$(`//*[contains(text(), "${name}")]`) }
}

module.exports = new Main();
