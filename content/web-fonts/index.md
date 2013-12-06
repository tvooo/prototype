Title: A Brief Introduction to Web Fonts
Date: 2012-03-19
Author: Tim von Oldenburg
Category: Article
ImageX: alphabet-15461.jpg

Typographic work has a long time relied on the characteristics of paper and ink. Books, newspapers, magazines, posters, flyers and brochures are all *physical*&mdash;you can touch them, and they are exactly as they were produced. The web breaks with this pattern and challenges us to create the same beauty on the web as on paper.

## The old problems in web design

Before designers began designing for the web, they had control over their medium. They could design in a WYSIWYG (what you see is what you get) manner, as they exactly knew what their design would look like to consumers.

However, the web changed all that. We don't know *who* uses our website, we don't know what browser he runs, what size his screen is and what fonts he got to render text on our page.

We don't even know if the user uses a computer! This confronts us with a lot of challenges, and we progress more and more in solving them.

* We don't need to care about "web safe" colors anymore&mdash;most screens can display 16bit colors nowadays
* Responsive web design and fluid grids are possible answers to the screen size problem
* We can provide fallbacks for missing browser capabilities

This leaves us with one problem we just began solving: fonts.

When you design something - be it a poster, product or web page - you carefully choose the typesfaces you want to use. You figure out how two typefaces pair with each other, you play around with different weights and styles. If you put a lot of thought and work into typography, you expect users to perceive it exactly as you designed it - and you have every right to do so.

## Web Fonts to the rescue
A web browser can only display the fonts it has access to. These are mostly the fonts that are installed on the user's computer. Until a short time ago, there was no way to break this boundary, but then came CSS3, and with it came **web fonts**. Now you can choose between several options to provide fonts to your users.

### Say 'Hello' to `@font-face`!

CSS3 brought a new rule called `@font-face`. Using it, you can include fonts in different file formats, eg. OpenType, TrueType and PostScript fonts.

* **Good**: All modern browsers support `@font-face` in some or the other way, even Internet Explorer!
* **Bad**: You have to have the font files on your server (or somewhere else on the web), which is mostly prohibited by font licenses. This is for a good reason, as font foundries don't want to have their work distributed all over the world for free. It's a matter of copyright.

Find out more on how to use `@font-face` at [www.font-face.com](http://www.font-face.com/). Also, consider [this updated syntax suggestion](http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax), in comparison to what [Paul Irish proposed in 2009](http://paulirish.com/2009/bulletproof-font-face-implementation-syntax/).

### Use a free service

Instead of bringing your own font files, use a service instead to deliver them. The most popular is probably [Google Web Fonts](http://www.google.com/webfonts), which has around 450 available. However, there are only a few professional, near-to-complete ones. A comprehensive list can be found at [Chad Mazzollas website](http://hellohappy.org/beautiful-web-type/).

### Use a professional service

There are a lot of reasons why your web typography needs are not satisfied so far. If you have a lot of clients, you will probably need a lot of web fonts, and if you have professional aims, you won't find you fonts on Google. Period.

In that case, check out Linotype and Typekit. Both are services with paid and free plans that serve web fonts for multiple sites. The plans are usually bound to page views and the number of domains you want to use the fonts on. Their service is quite convenient, especially as you **don't have to buy fonts anymore**. If you change your site design, just choose a different font and get rid of the other one.

> So how do Linotype and Typekit differ?

Basically, they offer different fonts. For example, the Helvetica Neue font is exclusively available from Linotype. Also, their plans are slightly different.

> What do you use?

On this web site I use **Calluna**, by Dutch font creator [Jos Buivenga](http://exljbris.com/), served by Typekit. The bubbles speak with **Nothing You Could Do**, served by Google Web Fonts.

### Make use of the font stack

Whenever you use web fonts, you should provide fallbacks. It might be that Google Web Fonts is down or that the user has no internet access whatsoever. For that case, put fonts in your font stack that look at least remotely similar to the intended one and are likely to be present on your users computer. Let's say you wanted *Helvetica Neue* to be your typeface, you would probably declare the following:

	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

Be sure to always put a general fallback at the end. A very good article on creating font stacks can be found at [Smashing Magazine](http://coding.smashingmagazine.com/2009/09/22/complete-guide-to-css-font-stacks/).

## Even more Web Typography

> Well, we've talked about web fonts. But isn't Web Typography about more?

Unfortunately, web fonts are nearly the most we get out of web typography so far. However, there are approaches to make more complex typographic elements available for us.

The Firefox web browser supports OpenType features using the `-moz-font-feature-settings` rule. *Please beware: this is **not an official CSS feature**.*

Mozilla enables us to use all the stuff we love, including:

* Small caps (the real ones)
* Contextual alternatives
* Ligatures
* Medieval numbers

Find out more at [Mozilla Hacks](http://hacks.mozilla.org/2010/11/firefox-4-font-feature-support/).

It is hard to say when other browser vendors will start to include OpenType features. Hopefully they will be part of the CSS4 specs, but even then you probably won't see much of them soon.

## Conclusion

Still - we don't have everything we are used to from classical design. But we (and by *we* I mean **you** too) should use everything we have available so far. Your [website does not need to look the same in every browser](http://dowebsitesneedtolookexactlythesameineverybrowser.com/). Even OpenType features only work in Firefox at this time, they are worth using. We can make browser vendors adapt to new technologies faster.

Let's make the web a little more beautiful!