# Conquering-responsive-layouts

21 days challenge course by Kevin Powell

## Notes day 1 - percentages ကိုသုံးပါ ၊ height ထည့်တာကို တတ်နိုင်သလောက်ရှောင်

HTML က သူ့အတိုင်းကို responsive ဖြစ်နေပြီးသား (ကြည့်မကောင်းတာက လွဲရင်)၊ သူ့အတိုင်း responsive မဖြစ်တော့ဘူးဆိုတာ ရေးလိုက်တဲ့ css က တစ်ခုခု လုပ်လိုက်လို့။ px သုံးပြီး fixed width or height ပေးလိုက်ရင် text တွေ overflow ဖြစ်နိုင်တယ်။

## Notes day 2

_em_ --> em သုံးထားတဲ့ element ရဲ့ parent element မှာရှိတဲ့ font-size ကို ဆက်စပ်တွက်ချက်တယ်။
**_problem_** `em` က parent ရဲ့ `font-size` ကိုကြည့်ပီးတွက်တာမို့ parent ရဲ့ parent မှာလည်း `font-size` ပေးထားခဲ့တယ်ဆိုရင် အဲ့တာကိုပါ ထည့်ပေါင်းတွက်။

ex

```html
<div font-size="1rem">
    /*default 16px * 1 = 16px*/
    <div font-size="2rem">
        parent 16px * 2 = 32px */
        <div font-size="2rem">/* parent 32px * 2 = 64px */ something</div>
    </div>
</div>
```

_rem_: root em --> html (or ::root) ထဲက font-size နဲ့ ဆက်စပ်တွက်ချက်တယ်။

font-size အတွက် **rem** ကိုသုံးပါ။

For `padding` and `margin`, em က `font-size` အတွက် **parent element** ကို ကြည့်တယ်ဆိုပေမယ့် `padding`, `margin` စတဲ့ တခြားဟာတွေဆိုရင်ကျတော့ အဲ့ဒီ element ကိုယ်တိုင်ရဲ့ `font-size` ကို ကြည့်ပြီး ဆက်စပ်တွက်ချက်တယ်။

`font-size` ပြောင်းလဲတဲ့ အပေါ်မူတည်ပြီး padding အချိုးအစားကို အတူတူ လိုက်ပြောင်းစေချင်တဲ့ အခါမျိုးဆိုရင် (for example for a button အကြီး၊ အလတ်၊ အသေး) `rem` ကို `font-size` အတွက် သုံးပြီး `em` or `rem` ကို `padding` အတွက်အဆင်ပြေသလိုသုံးပါ။

button or elements တွေကြားမှာ _consistent spacing_ ကိုလိုချင်ရင် `margin` ကို `rem` သုံးသင့်။

## Notes day 3 - max-width ထပ်ပေါင်းထည့်ခြင်း

ပိုကြီးတဲ့ screen တွေမှာ design ကိုပိုကောင်းစေချင်ရင် ရိုးရိုး `width` ကို `%` နဲ့ သတ်မှတ််ပေးထားတာကိုမှ bigger screen ကြရင် `max-width` သုံးပြီး ပိုမကြီးလာအောင် တခြားလိုချင်တာ တစ်ခုခု ကို ကြည့်ကောင်းအောင်ထိန်းချုပ်ထားလို့ရတယ်

media query မှာ
`max-width` ဆိုရင်

```css
@media only screen and (max-width: 600px) {
    /*some css */
}
```

`600px` ထက်**_သေး_**သွားပြီဆိုရင် media query ထဲက css က effect ထဖြစ်မယ်

```css
@media only screen and (min-width: 600px) {
    /*some css*/
}
```

`600px` ထက်**_ကြီး_** သွားပြီဆိုရင် media query ထဲက css က effect ထဖြစ်မယ်

so meida query ထဲမှာ `min-width` , `max-width` သုံးတာကိုတော့ ဒီလိုမှတ်

`max` --> သူ့ထက်ငယ်မှ effect ဝင်
`min` --> သူ့ထက်ကြီးမှ effect ဝင် (good for mobile first)

## Note Day 6

### Review

-   use percentages for width
-   avoid setting height
-   use max-width to limit space content can take up

**Why you shouldn't use "em"s for font-size**

Day 2 မှာပြောခဲ့သလိုပဲ
em -> က parent element ရဲ့ font-size ကို ကြည့်ပြီး compound (ထည့်ထည့်ပေါင်း) တာမို့ nest ဖြစ်တာများတဲ့ element တွေဆိုရင် font-size က တိုင်ပတ်နိုင်တာမို့ em ကို font-size အတွက် မသုံးသင့်ပါ။
`font-size` \*အတွက်ဆို **_rem_** ပဲသုံး
**_em_** ကိုတော့ `padding`, `margin`, တွေမှာ သုံးသင့်။
Renote: em က `font-size` မှာသုံးရင် parent ရဲ့ font-size ကို compound (ထပ်ထပ်ပေါင်းထည့်) ပေမယ့် ကျန်တဲ့ `padding`,`margin`,`width`,`height` တွေမှာဆိုရင်တော့ သုံးတဲ့ အဲ့ဒီ့ element ရဲ့ `font-size` ကိုမူတည်ပြီး တွက်တာမို့။

**A tale of width and max-width**

-   `width: 600px; max-width: 100%`
-   `width: 100%; max-width: 600px` (easy to understand and logically make sense)
    --> same thing
