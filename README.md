# NEWRUNE React Native app (in Belarusian name is "Гаданне на рунах") 

7.November 2022

This project uses simple JS methods Math.floor() and Math.random() for changing the this.state, the state change trigger is the *onPress*. That kind of JS-code can be used in any type of random apps including "fortune telling" like Runes, Tatot or "Yes-No-Maybe".

## Prerequisites:

- [Node.js](https://nodejs.org/en/)
- [Expo](https://expo.dev/)
- [Socket.io](https://www.npmjs.com/package/react-native-tcp-socket)
- [Metro](https://facebook.github.io/metro/)
- VScode

## Base dependencies:

 - expo for IOS and Android dev enviroment ;
 - expo-location for getting GPS navigation;
 - metro-config for the JS bundling;

  <br>
The app is quite simple and doesn't use some special permissions, also there is no special adaptations for work on IOS and Android.

## Usage

The universal way to run the project is to run the app with help of Expo Go. [Follow the official documantation to install and run it](https://docs.expo.dev/workflow/expo-go/).


## Folder structure

The project has simple and traditional structure:
 <br>
 - package.json
 - package.lock.json
 - metro.config.js
 - babel.config.js
 - app.json
 - App.js
 - eas.json

    -  components:
        - OdR_R.js
        - about.js
        - Aer_R.js
        - AlR_R.js
        - alR.js
        - BR_R.js
        - BR.js
        - DR.js
        - EiR_R.js
        - EiR.js
        - EoR.js
        - FR_R.js
        - FR.js
        - HagR.js
        - HR.js
        - IngR.js
        - IR.js
        - Kauna_R.js
        - KaunaR.js
        - L_R.js
        - LR.js
        - MR_R.js
        - MR.js
        - NR_R.js
        - NR.js
        - OdR.js
        - PaR_R.js
        - PaR.js
        - PR_R.js
        - PR.js
        - PureR.js
        - random.js
        - RR_R.js
        - RR.js
        - SolR.js
        - TH_R.js
        - ThR.js
        - TR_R.js
        - TR.js
        - UR_R.js
        - UR.js
        - CurrentAdress.js
        - Texting.js

    - assets:
         - adoptive-con.png
         - favicon.ico
         - icon.png
         - pattern.png
         - splash.png
         - bag.png
         - pattern.png
         - 3.png
         - ae_r.png
         - ae.png
         - al_R.png
         - al.png
         - b_R.png
         - b.png
         - d.png
         - e_R.png
         - e.png
         - eo.png
         - er.png
         - f_R.png
         - f.png
         - h_R.png
         - h.png
         - i.png
         - in.png
         - ing.png
         - kauna_R.png
         - kauna.png
         - l_R.png
         - l.png
         - m_R.png
         - m.png
         - n_R.png
         - n.png
         - oe_R.png
         - oe.png
         - p_R.png
         - p.png
         - pa_R.png
         - pa.png
         - pure.png
         - r_R.png
         - r.png
         - sol_R.png
         - sol.png
         - st.png
         - t_R.png
         - t.png
         - th_R.png
         - th.png
         - u_R.png
         - u.png


   ### Components Folder

   The Folder includes random.js, about.js, button.js and the js-files that include content rune information. 
   <br>
   The random.js includes *class Random* that declares *state* information and *onPress* function that changes *state's values* with the *event* - *Button* press. There is the *Vibration* pattern that is triggering during pressing on *Button*.
   The rendering elements are *Text*, *Text_Rune* and *Button*. The *Text* element renders the random result of state's value changing after the *OnPress* function.
    <br>
   The about.js includes the text and image information about the runes. The rendering elements are *Image* and *Text*.
    <br>
    All other js-files are the random rune answers. The files are similar and have diffrenties only in *Image's* source and *Text* content.

   ### Assets Folder

   The images in the adoptive-con.png, favicon.ico, icon.png, pattern.png, splash.png are customized. The pattern.png image is used for the *ImageBackground* in App.js. All other images are the content images.


