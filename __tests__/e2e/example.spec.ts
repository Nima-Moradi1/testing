import { test, expect } from '@playwright/test';

test.describe('Form Component' , ()=> {
  //?Since we do not want to keep repeating where to check this component, we can use a hook from playwright
  test.beforeEach(async ({page})=> {
    await page.goto('http://localhost:3000');
  })
  //1. Check the heading to be there!
  test('it should have correct elements' , async ({page}) => {
    await expect(
      page.getByRole('heading' , {
        name : 
        'Form'
      })
    ).toBeVisible()
    await expect(page.getByPlaceholder('Enter Item')).toBeVisible()
    await expect(page.getByRole('button', {name : 'Add'})).toBeVisible()
  })
  //2. On the initial render of component, the list should be empty as we're not saving it anywhere
  test('it should have empty items list on start' , async ({page}) => {
    const itemsList = page.getByTestId('items-list') ;
    await expect(itemsList).toBeEmpty();
  })
  //3. We check if the input works and we can write in it and then we test the button to add!
  test('it should add item to list' , async ({page}) => {
    const input = page.getByPlaceholder('Enter Item')
  //we use fill method to write something in the input here!
    await input.fill('Item 1 Added')
  //4. Click the button to check if it adds the input
    await page.getByRole('button' , {name : 'Add'}).click()
  //5. Now, an item should be added in the list (an array with the same testIds in Form Component)
    const item = page.getByTestId('item').nth(0) ;
    await expect(item).toHaveText('Item 1 Added') ;
  //6. We also expect the input to be empty after adding the item to the list
    await expect(input).toBeEmpty() ;
  })
})
