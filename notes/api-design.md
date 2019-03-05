#%RAML 1.0
title: t-shirt-store API
baseUri: http://t-shirtstore.com/{version}
version: v1

/api:
  /oauth/access_token:
  post:
    queryParameters: 
      client_id:
  
  /products:
    get:
      queryParameters: 
        department:
        category:
        color:
        size:
        search:
      responses: 
        200:
    /product_id:
      get:
        responses: 
          200:
      post:
        queryParameters: 
          oauth:
          cart_id:
          product:
          quantity:
        responses: 
          200: 
                
  /users:
    /register:
      post:
        queryParameters: 
          name:
          email:
          password:         
    /login:
      post:
        queryParameters: 
          email:
          password:
    
    /current:
      get:
        description: protected route
        responses: 
          200:
            body: 
              application/json:
    /profile:
      get:
        description: returns a form to add additional personal info
        queryParameters: 
          oauth:
            description: protected route
           
              
  /cart:   
    /cart_id:
      get:
        description: check-out action, returns checkout info
        queryParameters: 
          oauth:
        responses: 
          200:
            
      post:
        description: complete a check out, initiates an order if successful
        queryParameters: 
          oauth:
    
      /products:
        get:
          queryParameters: 
            oauth:
          responses: 
            200:
              description: products in cart
        post:
          description: post an product to the cart and adds it to the cart
          queryParameters: 
            oauth:
            product_id:
            quantity:
          responses: 
            200:
              description: returns an updated cart cataloge
        put:
          description: update an item in the cart
          queryParameters: 
            oauth:
            product_id:
            quantity:
          responses: 
            200:
              description: returns an updated cart cataloge
        delete:
          description: delete an item in the cart
          queryParameters: 
            oauth:
            product_id:
            quantity:
          responses: 
            200:
              description: returns an updated cart cataloge
        
          
          
          
                
          
        
    
    
    

##Here is an example of proposed api structure:

http://t-shirtstore.com/v1/api/products?department=regional&category=french&color=blue&size=small&search=black+sabbith


##more read friendly but heavly nested:
http://t-shirtstore.com/v1/api/products/:regional/:french/?color=blue&size=small&search=black+sabbith