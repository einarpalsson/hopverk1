# Hópverkefni 1

Þetta hópverkefni, unnið af Einari, Dagbjörtu og Ásbirni er vefsíða byggð á hönnun [Meghan Regior](https://twitter.com/meghanregior) og er síða með ýmsum uppskriftum og skemmtilegheitum.

## Keyrsla verkefnis

- `npm run dev`: keyrir verkefnið og opnar síðuna í nýjum glugga í vafra.
- `npm run lint`: keyrir kóða verkefnis í gegnum stylelint sem eru stalar sem fara á eftir í uppsetningu CSS og SCSS kóða.
- [Hér](www.youtube.com) er síðan uppsett á heimasvæði nemenda í verkefninu.

## Lýsing verkefnis

Verkefninu er skipt upp í fjórar síður. Fyrst blasir við forsíða og þaðan er hægt að heimsækja þrjár undirsíður með meiri upplýsingum. Síðurnar eru því eftirfarandi:

- Forsíða
- Uppskriftavalmynd
- Uppskriftasíða
- Video-uppskrift.

### Uppsetning

Verkefnið er unnið í HTML og CSS, þar sem CSS hlutinn er útfærður með SCSS. Einnig er verkefnið örlítið snert af Javascript.

Í verkefnamöppu eru tólf mismundandi skrár ásamt fimm möppum en við leyfum okkyr að horfa framhjá tveim möppum. `/styles` mappan inniheldur þrettán SCSS skrár sem útfærir allan CSS kóða verkefnisins. Möppurnar eru eftirfarandi í stafrófsröð: 

 - `button.scss` - Allir takkar í verkefninu.
 - `cards.scss` - Öll "cards" í verkefninu.
 - `config.scss` - Hér eru breytur sem notaðar eru í öllum öðrum skrá.
 - `footer.scss` - Fóturinn (botninn) á öllum síðum í verkefninu.
 - `global.scss` - CSS kóði sem á að vera alls staðar. 
 - `grid.scss` - Grid útfærsla verkefnis.
 - `hamburger.scss` - "Hamborgara" valmynd fyrir allt undir 499px. Hér kom JS aðeins við sögu.
 - `header.scss` - Haus (toppur) á öllum síðum í verkefninu. 
 - `hero.scss` - "Hero" svæði verkefnis, sést á tveim stöðum í verkefninu.
 - `our-book-section.scss` - SCSS kóði fyrir auglýsingu bókar á forsíðu.
 - `recipe-page.scss` - SCSS skjal fyrir uppskriftarsíðu.
 - `recipe-section.scss` - SCSS skjal fyrir svæði þar sem öll "cards" koma.
 - `videoRecipeHeader.scss` - SCSS skjal fyrir Video-uppskrift.

>Þessi skjöl eru keyrð í gegnum `styles.scss` sem er "aðal" scss skjalið og útfrá því verður `styles.css` til. 

Annað sem fram kemur í verkefnamöppu eru skjöl eins og `package.json` sem er með allar "scriptur" verkefnisins, `grid-overlay.css` sem er viðmiðunarskjal fyrir grid og svo `/img` mappan en hún inniheldur allar myndir sem sjá má víðs vegar á vefsíðunni.


## Hópmeðlimir
### Einar
  - Netfang: epp5@hi.is 
  - Github: `Einarpalsson`
### Dagbjört
  - Netfang: xxxX@hi.is
  - Github: `Dagbjort`
### Ásbjörn
  - Netfang: xxxX@hi.is
  - Github: `asbjornbaldvins`

## Að lokum
Gutter hjá okkur er 20px, í samanburði við 30px hjá Óla. `Stimmikex` athugaði þetta fyrir okkur og við fengum grænt lj+os á það og héldum því óbreyttu (það var meira vesen að breyta því en við hefðum gert ráð fyrir).

Notast var við Javascript kóða við útfærslu "hamborgara" valmyndarinnar og komumst við að því seinna meir að svoleiðis kóða ber að forðast en Óli var spurður að þessu og gaf grænt ljós. Athugasemd var bætt í kóða á þeim stað sem það á við. 
