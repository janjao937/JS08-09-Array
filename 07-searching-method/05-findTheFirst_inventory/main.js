const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
  ];

  //cherries

  const result = inventory.find((e)=>{
    
    if(e.name ==="cherries") return e.id;
  })

