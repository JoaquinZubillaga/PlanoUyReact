const products = [
    {
      id: "aaa000",
      name: "",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
      price: ,
      stock: ,
      image: "",
      category: ""
    },
    {
      id: "aaa001",
      name: "",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
      price: ,
      stock: ,
      image: "",
      category: ""
    },
    {
      id: "aaa002",
      name: "",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
      price: ,
      stock: ,
      image: "",
      category: ""
    },
    {
      id: "aaa003",
      name: "",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
      price: ,
      stock: ,
      image: "",
      category: ""
    },
    {
      id: "aaa004",
      name: "",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
      price: ,
      stock: ,
      image: "",
      category: ""
    },
    {
      id: "aaa005",
      name: "",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non aut repellat cupiditate praesentium incidunt ipsum nostrum. Vitae tenetur libero iure! Culpa sapiente assumenda veniam aperiam fugiat excepturi! Facere, sequi illum.",
      price: ,
      stock: ,
      image: "",
      category: ""
    },
  ]

const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 2000)
    })
  }
  
  const getProduct = (idProduct) => {
    return new Promise( (resolve)=> {
      setTimeout(()=> {
        const product = products.find( (product)=> product.id === idProduct )
        resolve(product)
      }, 2000)
    })
  }
  
  export { getProducts, getProduct }