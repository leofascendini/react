const notes = [
    {
      id: '1',
      name: 'ASUS E406NA',
      price: '315',
      category: 'Laptop',
      img: 'https://thotcomputacion.com.uy/wp-content/uploads/2020/08/ASUSE406NA.png',
      stock: '15',
      descripcion: 'Descripcion de Asus E406NA'
    },
    {
      id: '2',
      name: 'ASUS X515JA',
      price: '525',
      category: 'Laptop',
      img: 'https://thotcomputacion.com.uy/wp-content/uploads/2022/06/X515JA_Frente.png',
      stock: '16',
      descripcion: 'Descripcion de Asus X515JA'

    },
    {
      id: '3',
      name: 'ASUS M415DA',
      price: '650',
      category: 'Laptop',
      img: 'https://thotcomputacion.com.uy/wp-content/uploads/2022/07/M415DA_Frente.png',
      stock: '17',
      descripcion: 'Descripcion de Asus M415DA'
    },
    {
      id: '4',
      name: 'ASUS X543UA',
      price: '650',
      category: 'Laptop',
      img: 'https://thotcomputacion.com.uy/wp-content/uploads/2022/08/X543_Frente.png',
      stock: '15',
      descripcion: 'Descripcion de Asus X543UA'
    },
    {
      id: '5',
      name: 'ASUS X515JA',
      price: '690',
      category: 'Notebook',
      img: 'https://thotcomputacion.com.uy/wp-content/uploads/2022/06/Front.png',
      stock: '15',
      descripcion: 'Descripcion de X515JA'
    },
    {
      id: '6',
      name: 'GIGABYTE G5',
      price: '1825',
      category: 'Notebook',
      img: 'https://thotcomputacion.com.uy/wp-content/uploads/2022/05/4714_1_e31f302e0d2841f99b3777411bb8b1a6.jpg',
      stock: '17',
      descripcion: 'Descripcion de Gigabyte G5'
    },
    {
      id: '7',
      name: 'GIGABYTE G6',
      price: '1990',
      category: 'Notebook',
      img: 'https://thotcomputacion.com.uy/wp-content/uploads/2022/11/5042_1_38ea83cfc4a645eab06bde30ca24be97.jpg',
      stock: '15',
      descripcion: 'Descripcion de Gigabyte G6'
    }, 
    {
      id: '8',
      name: 'GIGABYTE AERO',
      price: '3990',
      category: 'Notebook',
      img: 'https://thotcomputacion.com.uy/wp-content/uploads/2022/05/4717_1_f828e37dda124648add9cac4a99d8c24.jpg',
      stock: '15',
      descripcion: 'Descripcion de Gigabyte AERO'
    },
    {
      id: '9',
      name: 'GIGABYTE A5',
      price: '3115',
      category: 'Notebook',
      img: 'https://thotcomputacion.com.uy/wp-content/uploads/2022/11/5039_1_12c71a1b29394403a52142067316c6c5.jpg',
      stock: '15',
      descripcion: 'Descripcion de GIGABYTE A5'
    }, 
  ]

  export const getNotes = () => {
    return new Promise ((resolve) => {
      setTimeout(() => {
        resolve(notes)
      }, 2000)
    })
}

export const getNoteById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(notes.find(object => object.id === id))
    }, 2000);
  })
}

export const getNoteByCategory = (categoryId) => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve(notes.filter(object => object.category === categoryId))
    }, 2000)
  }) 
}

