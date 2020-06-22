# Shopping Cart Pairing Assessment

### Process

- Introduce yourself.
- "This pairing assessment is just to find out how we can tailor appropriate pre-work
for you and get a sense for growth between the beginning and end of the class"
- How much Javascript have you written?
> If they are experienced in javascript, ask them to avoid giving exact syntax as much as possible.
> If they are java devs, tell them that they can say how they would do it in java and you can translate.
- This assessment is in Javascript but you don't want you to worry about syntax.
I will do all the typing, you will just tell me what you want to accomplish using academic language.
Just tell me what you want to accomplish using as many high level programming terms as possible.
- We have three files we are working with. We have our test file, we will uncomment each additional test
as we pass the previous one. This is the cart class, this is the only place we will be writing any code.
We will not change the tests under any circumstance. There is also an Item class, this will be used in the test
and is not open for modification. It is just a value object with a name, price, and onSale boolean.
- So the goal of this is _not_ to build a fully featured shopping cart that works and is awesome.
The goal is to write the minimum amount of sensible code in order to get the test to pass. Do the simplest thing
and only do things that are required by the tests.
- Make sure they can read the tests and test output, adjust accordingly
- Set a 30 minute timer and begin the assessment
- Do not get a candidate unstuck
- Start with just asking "What are you thinking"
- Move on to asking "If this were a physical shopping cart, what would we do"
- Err on the side of letting them struggle
- You can refactor at any point when we're green

## Proctoring Notes

Be consistent about starting by running tests, then running tests at each change even if the candidate is not on top of requesting it. Some people will be unfamiliar with TDD and need to adjust to this style as they take the assessment.

At all points as them if what they have done is the simplest thing and if they would like to refactor.

If the candidate is completely stuck, walk them through the test line by line describing what is going on. If the candidate still cannot move on, provide them with the initial code and try to have them explain how it relates to the test.

## The Coding Assessment and Scoring

### Instantiation

```
it("gets initialized without items or a total price", function() {
  var cart = new Cart();
  expect(cart.items).toEqual([]);

  expect((new Cart()).totalPrice).toEqual(0);
});
```

#### Scoring

1. Required test administrator to provide the code and explain concept.
2. Assessment taker struggles with vocabulary but is able to get 50-70% of solution without administrator intervention.
3. Uses words like "instantiate" or "initialize" or "constructor" to describe what needs to be created. Followed by using words like "fields" or "properties" to describe adding `items` and `totalPrice` to the `Cart` constructor.
4. Is verbose and talks through test explaining what is being tested and using flawless vocabulary. Gets the correct initial values without prompting.

### `addItem` / `totalPrice`

```
it("allows you to add items to the cart", function() {
  var item1 = new Item("Fruit", 4.50);
  var item2 = new Item("Ice Cream", 5.50);
  var cart = new Cart();

  cart.addItem(item1);
  expect(cart.totalPrice).toEqual(4.50);

  cart.addItem(item2);
  expect(cart.totalPrice).toEqual(10);
});
```

#### Scoring

1. Required test administrator to provide the code and explain concept.
2. Assessment taker struggles with vocabulary but is able to get 50-70% of solution without administrator intervention.
3. Any solution that involves modifying the state of `totalPrice` and arriving at the correct value.
4. Begins by having `return 4.50;` as the `totalPrice` when `addItem` is invoked with `item1`. Solution modifies the state of `totalPrice` without using the `items` Array property to store each item provided to `addItem`.

### `itemizedList`

```
it("allows you to display an itemized list", function() {
  var item1 = new Item("Coffee", 2.5);
  var item2 = new Item("Donuts", 4.5);
  var cart = new Cart();

  expect(cart.itemizedList()).toEqual([]);

  cart.addItem(item1);
  cart.addItem(item2);
  expect(cart.itemizedList()).toEqual(["Coffee - $2.5", "Donuts - $4.5"]);
});
```

#### Scoring

1. Required test administrator to provide the code and explain concept.
2. Assessment taker struggles with vocabulary but is able to get 50-70% of solution without administrator intervention. Is unable to illustrate an understanding of what iteration is.
3. Provides an implementation that satisfies the tests with little to no assistance. Identifies the need to store items (or at least a list of names and prices) and iterate through the collection of items to form the output of `itemizedList`.
4. Begins by having `return [];` as a first solution. Uses flawless vocabulary and easily identifies an implementation. An implementation that uses `Array.prototype.map` is preferable.

### `addItem` / `totalPrice` for more than one item

```
it("allows you to add more than one of a given item to the cart", function() {
  var item1 = new Item("Fruit", 4.50);
  var item2 = new Item("Ice Cream", 5.50);
  var cart = new Cart();

  cart.addItem(item1, 2);
  expect(cart.totalPrice).toEqual(9);

  cart.addItem(item2, 4);
  expect(cart.totalPrice).toEqual(31);
});
```

#### Scoring

1. Required test administrator to provide the code and explain concept.
2. Assessment taker struggles with vocabulary but is able to get 50-70% of solution without administrator intervention. Is unable to illustrate an understanding of providing default values for an argument, or misidentifies default value as `0` and cannot figure out solution.
3. Provides an implementation that satisfies the tests with little to no assistance. Identifies the need to either store multiple items and iterate through them or just multiple the added item's price by a `quantity` (or similarly named) parameter. When previous tests break, is able to identify in a reasonable amount of time where the issue is and that a previous test stopped passing.
4. Correctly identifies the need for a default value (`1`) and second argument for `addItem`. Makes the simplest code change possible asked for by the test and only modifies code involving `totalPrice` inside of `addItem`. When previous tests break, is quickly able to identify where the issue is and that a previous test stopped passing.

### `itemQuantities`

```
it("allows you to see how many of each item is in the cart", function () {
  var coffee = new Item("Coffee", 1.50);
  var cream = new Item("Cream", 0.50);
  var cart = new Cart();

  expect(cart.itemQuantities()).toEqual([]);

  cart.addItem(coffee, 2);
  expect(cart.itemQuantities()).toEqual(['Coffee - 2']);

  cart.addItem(cream, 4);
  expect(cart.itemQuantities()).toEqual(['Coffee - 2', 'Cream - 4']);
});
```

#### Scoring

1. Required test administrator to provide the code and explain concept.
2. Assessment taker struggles with vocabulary but is able to get 50-70% of solution without administrator intervention. Is unable to illustrate an understanding of needing to store additional information.
3. Provides an implementation that satisfies the tests with little to no assistance. Many solutions work for this.
4. Introduces an additional entity (constructor) like `CartItem` which contains the `item` and `quantity` and is able to make corresponding refactors with minimal effort. Uses flawless vocabulary in descriptions and during refactoring.

### `onSaleItems`

```
it("allows you to display the names and prices of items that are on sale", function() {
  var item1 = new Item("Pie", 5.5, false);
  var item2 = new Item("Coffee", 2.5, true);
  var item3 = new Item("Donuts", 4.5, true);
  var cart = new Cart();

  cart.addItem(item1);
  expect(cart.onSaleItems()).toEqual([]);

  cart.addItem(item2);
  expect(cart.onSaleItems()).toEqual(["Coffee - $2.5"]);

  cart.addItem(item3);
  expect(cart.onSaleItems()).toEqual(["Coffee - $2.5", "Donuts - $4.5"]);
});
```

#### Scoring

1. Required test administrator to provide the code and explain concept.
2. Assessment taker struggles with vocabulary but is able to get 50-70% of solution without administrator intervention. Is unable to illustrate an understanding of filtering stored information
3. Provides an implementation that satisfies the tests with little to no assistance. Many solutions work for this. Words used should include things like "iterate" or "loop" to explain that all items need to be filtered through.
4. Uses flawless vocabulary in descriptions and during refactoring. Is able to identify usage of `Array.prototype.filter` as a way to only display on sale items.

## Additional Scoring Factors

### Communication

1. Candidate consistently "went dark" and did not often attempt to explain what they were trying to do. Alternatively, candidate spent a lot of time in silent thought without communication to administrator.
2. Candidate "went dark" from time to time but was at least intermittently clear about what they were trying to do.
3. Candidate was clear and concise in explaining what they wanted to do between 70-90% of the time. Walked with administrator through the tests and asked appropriate questions.
4. Candidate was clear and concise 90-100% of the time with well phrased technical questions and and open style of communication.

### General Attitude

1. Negative attitude or disrespectful disposition. Totally unengaged in solving the problems at hand and disagrees with administrator to the point of discomfort.
2. Mild or negative attitude or low engagement. Does not respond well to failing tests. May disagree with administrator and create small tension.
3. Positive attitude, engaged and interested in working with the administrator to solve the programming problems. Is able to calmly react to failing tests.
4. Expresses deep interest in the problems at hand and/or is completely engaged in the solution. Is able to calmly react to failing tests.
