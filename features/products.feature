Feature: Manipulations with products

@view
Scenario: Viewing Product Details
  Given I am on the main page
  When I click on a product title
  Then I should be taken to the product details page
  And I should see the product name, price, and description

@basket
Scenario: Adding a Product to the Basket
  Given I am on a product details page for "Combination Pliers"
  When I click the "Add to Cart" button
  Then the product should be added to my basket
  And I should see the updated basket count
  And the basket total price should include the product price "$14.15"

@favorites
Scenario: Adding a Product to Favorites
  Given I am signed in and on a product details page
  When I click the "Add to Favorites" button
  Then the product should be added to my favorites list

@exactProduct
Scenario: Searching for an Exact Product
  Given I am on the main page and want search the exact product
  When I search the "Claw Hammer" in the search bar
  Then the search results should display the list of hammers

@brand
Scenario: Filtering Products by Brand
  Given I am on the main page and want filter product by brand
  When I select a "ForgeFlex Tools" brand from the filters
  Then I should see only products that belong to the selected brand