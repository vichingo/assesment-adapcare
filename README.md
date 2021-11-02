# Assesment Adapcare

## 1. Globally installed nest(api) and expo

```bash
# install nest command line tools
npm i -g @nestjs/cli
-or-
yarn global add @nest/cli

# install expo command line tools
npm install -g expo-cli
-or-
yarn global add expo-cli
```

### 2. Install Expo Client on phone (Android or Apple)

### 3. Setup mongodb trough docker

### 4. Install expo project in client folder

### 5. Install a nestjs api in server folder

<br>
<br>

# Assesment analysis

## 1. Issues upfront

I needed to figure out solutions to the two main areas where I did not have to knowledge level required:

1. ### React Native UI Kit (I wanded to go the fancy route)

   I tried the UI Kitten 5.1 framework [https://akveo.github.io/react-native-ui-kitten/], but after some tries failed miserably and I went back to the standard Components with some styling applied

2. ### Make an API using Nest and MongoDB using and ORM I know (Prisma2 or GraphQL)

I succeeded in setting up a nest api, but when I wanted to get the mogodb intergration working wit an ORM, again, I failed to do so, but this this it was related to Prisma 2 framework lacking support for mongodb. So I went the mongoose route, which took me to the solution presented

3. ### Providing testing through GivenWhenThen style tests

I needed to read up on this testing method

## 2. Steps I took

### On the client side

1. Design the Navigation
   AppNavigator that contans the AppContainer and MainNavigator that contains the actual Stack navigation.
2. Design the screens
3. Design the screens to be filled with the layouts

### On the server side

1. Design the schema for the recipes in nestjs, taking not of the specific requests made in the assesment.
2. Hookup the docker mongodb with nestjs using the mongoose package

### Steps I did not get around to

1. Retrieve the data from the api (connection errors I did not understand)
2. Using the full power of Formik for the recipe creation form. Somhow Formik is not fully supported in React native. Where as I thought Formik (becuase of extensive use in react projects would be suppported)
3. Making any tests.
   <br>
   <br>

# Thoughts

Recipe creation date is part of the ORM style of adding dreated, updated and deleted fields to the table. Date is formatted in the frontend. Whereall formatting and rounding up should be located.

dummyData created like it was a reply from the api.

The api would be easily navigated by implementing swagger UI [https://swagger.io/tools/swagger-ui/]

I would make the recipe conform the structured data setup by google so that it would be enabled to use it with searching for recipes through voice command hardware: https://developers.google.com/search/docs/advanced/structured-data/recipe
And/or maybe use json-LD to make it more connected.

I used the example on https://webcode.tools/generators/json-ld/recipe to build my recipe.

Amount per ingredient has been omitted due to the fact that is has not been requested in the assesment and making fetures that are not requested is non billable time

I should have committed the code more often. My Bad!
<br>
<br>

# Things I didn't do but know that they need to be done & Known errors

- componentWillReceiveProps error should be fixable when having more time
- I did not do any status checking the returned JSON from the API, besides adding HTTP Call status
  <br>
  <br>

# Unforeseen hurdless

- I wasn't aware Prisma had such poor support for MongoDB
- I did not expect the Form Components to be removed from the library (Checkbox, RadioButton)
- And subsequently no proper support for Formik in the standard UI configuration. UI Kitten could solve this
  <br>
  <br>

  # Test scenarios that need to be described

  - We need to test if the recipeService is called correctly,
  - Wether the read method is called,
  - Wether the create method is called,
  - Wether the update method is called,
  - Wether the delete method is called,

  With the result given in the stub

# Assesment details

(I know.... in dutch)

Maak een React Native applicatie waarin gebruikers hun favoriete recepten kunnen beheren. De volgende functionaliteiten moeten minimaal aanwezig zijn in de app:

- [x] Overzicht van alle recepten
- [x] Favoriete recepten kunnen aangeven en bovenaan weergeven in het overzicht
- [ ] Recepten kunnen maken, wijzigen en verwijderen
- Een recepten scherm bevat de volgende gegevens:
  - [x] Titel
  - [x] Datum dat het recept is aangemaakt (format als dd‐MM‐yyyy HH:mm)
  - [x] Kookinstructie
  - [x] Indicator of het vegetarisch of niet
  - [x] Indicator voor hoeveel personen het recept is
  - [x] Lijst met ingrediënten

## Requirements

1. Licht je keuzes en motivaties toe in een README file
2. Sla je repository op op Github of Gitlab en stuur ons de link
3. Beschrijf 5 test scenario’s in de GivenWhenThen stijl

### Bonus:

Automatische testen voor de 5 scenario’s
