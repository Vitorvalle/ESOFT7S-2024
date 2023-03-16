import {writeFile,readFile} from "fs/promises"

class ProductService{
    async createProductList(data){
        try {
            console.log("criando Lista")
           await writeFile('products.json', JSON.stringify(data)) 
        } catch (error) {
            throw new Error("falha ao salvar lista")
        }
    }

    async readProductList(){
        try {
            console.log("Lendo Arquivo")
            const productList = await readFile('products.json', "utf-8");
            return JSON.parse(productList)
        } catch (error) {
            throw new Error ("falha na leitura")
        }
    }

    async readStockPrice(){
        try {
            const productList = await this.readProductList()
            const productStockPrice = productList.map(product => {
               return{
                nome: product.nome,
                qtde: product.qtde,
                preco: product.preco,
                valor_estoque: product.preco * product.qtde
               }
            });
            
            return productStockPrice
        } catch (error) {
            throw new Error ("falha na leitura")
        }
    }


}


export default new ProductService
