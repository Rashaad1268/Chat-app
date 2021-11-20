import type { NextApiRequest, NextApiResponse } from 'next'

type Data = string

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.send(`<html dir="ltr" lang="en"><head>
  <meta charset="utf-8">
  <meta name="color-scheme" content="light dark">
  <meta name="theme-color" content="rgb(217, 48, 37)">
  <meta name="viewport" content="initial-scale=1, minimum-scale=1, width=device-width">
  <meta http-equiv="Content-Security-Policy" content="require-trusted-types-for 'script'; trusted-types;">
  <title>Security error</title>
  <style>/* Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */

a {
  color: var(--link-color);
}

body {
  --background-color: #fff;
  --error-code-color: var(--google-gray-700);
  --google-blue-100: rgb(210, 227, 252);
  --google-blue-300: rgb(138, 180, 248);
  --google-blue-600: rgb(26, 115, 232);
  --google-blue-700: rgb(25, 103, 210);
  --google-gray-100: rgb(241, 243, 244);
  --google-gray-300: rgb(218, 220, 224);
  --google-gray-500: rgb(154, 160, 166);
  --google-gray-50: rgb(248, 249, 250);
  --google-gray-600: rgb(128, 134, 139);
  --google-gray-700: rgb(95, 99, 104);
  --google-gray-800: rgb(60, 64, 67);
  --google-gray-900: rgb(32, 33, 36);
  --heading-color: var(--google-gray-900);
  --link-color: rgb(88, 88, 88);
  --popup-container-background-color: rgba(0,0,0,.65);
  --primary-button-fill-color-active: var(--google-blue-700);
  --primary-button-fill-color: var(--google-blue-600);
  --primary-button-text-color: #fff;
  --quiet-background-color: rgb(247, 247, 247);
  --secondary-button-border-color: var(--google-gray-500);
  --secondary-button-fill-color: #fff;
  --secondary-button-hover-border-color: var(--google-gray-600);
  --secondary-button-hover-fill-color: var(--google-gray-50);
  --secondary-button-text-color: var(--google-gray-700);
  --small-link-color: var(--google-gray-700);
  --text-color: var(--google-gray-700);
  background: var(--background-color);
  color: var(--text-color);
  word-wrap: break-word;
}

.nav-wrapper .secondary-button {
  background: var(--secondary-button-fill-color);
  border: 1px solid var(--secondary-button-border-color);
  color: var(--secondary-button-text-color);
  float: none;
  margin: 0;
  padding: 8px 16px;
}

.hidden {
  display: none;
}

html {
  -webkit-text-size-adjust: 100%;
  font-size: 125%;
}

.icon {
  background-repeat: no-repeat;
  background-size: 100%;
}

@media (prefers-color-scheme: dark) {
  body {
    --background-color: var(--google-gray-900);
    --error-code-color: var(--google-gray-500);
    --heading-color: var(--google-gray-500);
    --link-color: var(--google-blue-300);
    --primary-button-fill-color-active: rgb(129, 162, 208);
    --primary-button-fill-color: var(--google-blue-300);
    --primary-button-text-color: var(--google-gray-900);
    --quiet-background-color: var(--background-color);
    --secondary-button-border-color: var(--google-gray-700);
    --secondary-button-fill-color: var(--google-gray-900);
    --secondary-button-hover-fill-color: rgb(48, 51, 57);
    --secondary-button-text-color: var(--google-blue-300);
    --small-link-color: var(--google-blue-300);
    --text-color: var(--google-gray-500);
  }
}
</style>
  <style>/* Copyright 2014 The Chromium Authors. All rights reserved.
   Use of this source code is governed by a BSD-style license that can be
   found in the LICENSE file. */

button {
  border: 0;
  border-radius: 4px;
  box-sizing: border-box;
  color: var(--primary-button-text-color);
  cursor: pointer;
  float: right;
  font-size: .875em;
  margin: 0;
  padding: 8px 16px;
  transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
}

[dir='rtl'] button {
  float: left;
}

.bad-clock button,
.captive-portal button,
.https-only button,
.insecure-form button,
.lookalike-url button,
.main-frame-blocked button,
.neterror button,
.pdf button,
.ssl button,
.safe-browsing-billing button {
  background: var(--primary-button-fill-color);
}

button:active {
  background: var(--primary-button-fill-color-active);
  outline: 0;
}

#debugging {
  display: inline;
  overflow: auto;
}

.debugging-content {
  line-height: 1em;
  margin-bottom: 0;
  margin-top: 1em;
}

.debugging-content-fixed-width {
  display: block;
  font-family: monospace;
  font-size: 1.2em;
  margin-top: 0.5em;
}

.debugging-title {
  font-weight: bold;
}

#details {
  margin: 0 0 50px;
}

#details p:not(:first-of-type) {
  margin-top: 20px;
}

.secondary-button:active {
  border-color: white;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .3),
      0 2px 6px 2px rgba(60, 64, 67, .15);
}

.secondary-button:hover {
  background: var(--secondary-button-hover-fill-color);
  border-color: var(--secondary-button-hover-border-color);
  text-decoration: none;
}

.error-code {
  color: var(--error-code-color);
  font-size: .8em;
  margin-top: 12px;
  text-transform: uppercase;
}

#error-debugging-info {
  font-size: 0.8em;
}

h1 {
  color: var(--heading-color);
  font-size: 1.6em;
  font-weight: normal;
  line-height: 1.25em;
  margin-bottom: 16px;
}

h2 {
  font-size: 1.2em;
  font-weight: normal;
}

.icon {
  height: 72px;
  margin: 0 0 40px;
  width: 72px;
}

input[type=checkbox] {
  opacity: 0;
}

input[type=checkbox]:focus ~ .checkbox::after {
  outline: -webkit-focus-ring-color auto 5px;
}

.interstitial-wrapper {
  box-sizing: border-box;
  font-size: 1em;
  line-height: 1.6em;
  margin: 14vh auto 0;
  max-width: 600px;
  width: 100%;
}

#main-message > p {
  display: inline;
}

#extended-reporting-opt-in {
  font-size: .875em;
  margin-top: 32px;
}

#extended-reporting-opt-in label {
  display: grid;
  grid-template-columns: 1.8em 1fr;
  position: relative;
}

#enhanced-protection-message {
  border-radius: 4px;
  font-size: 1em;
  margin-top: 32px;
  padding: 10px 5px;
}

#enhanced-protection-message label {
  display: grid;
  grid-template-columns: 2.5em 1fr;
  position: relative;
}

#enhanced-protection-message div {
  margin: 0.5em;
}

#enhanced-protection-message .icon {
  height: 1.5em;
  vertical-align: middle;
  width: 1.5em;
}

.nav-wrapper {
  margin-top: 51px;
}

.nav-wrapper::after {
  clear: both;
  content: '';
  display: table;
  width: 100%;
}

.small-link {
  color: var(--small-link-color);
  font-size: .875em;
}

.checkboxes {
  flex: 0 0 24px;
}

.checkbox {
  --padding: .9em;
  background: transparent;
  display: block;
  height: 1em;
  left: -1em;
  padding-inline-start: var(--padding);
  position: absolute;
  right: 0;
  top: -.5em;
  width: 1em;
}

.checkbox::after {
  border: 1px solid white;
  border-radius: 2px;
  content: '';
  height: 1em;
  left: var(--padding);
  position: absolute;
  top: var(--padding);
  width: 1em;
}

.checkbox::before {
  background: transparent;
  border: 2px solid white;
  border-inline-end-width: 0;
  border-top-width: 0;
  content: '';
  height: .2em;
  left: calc(.3em + var(--padding));
  opacity: 0;
  position: absolute;
  top: calc(.3em  + var(--padding));
  transform: rotate(-45deg);
  width: .5em;
}

input[type=checkbox]:checked ~ .checkbox::before {
  opacity: 1;
}

#recurrent-error-message {
  background: #ededed;
  border-radius: 4px;
  margin-bottom: 16px;
  margin-top: 12px;
  padding: 12px 16px;
}

.showing-recurrent-error-message #extended-reporting-opt-in {
  margin-top: 16px;
}

.showing-recurrent-error-message #enhanced-protection-message {
  margin-top: 16px;
}

@media (max-width: 700px) {
  .interstitial-wrapper {
    padding: 0 10%;
  }

  #error-debugging-info {
    overflow: auto;
  }
}

@media (max-width: 420px) {
  button,
  [dir='rtl'] button,
  .small-link {
    float: none;
    font-size: .825em;
    font-weight: 500;
    margin: 0;
    width: 100%;
  }

  button {
    padding: 16px 24px;
  }

  #details {
    margin: 20px 0 20px 0;
  }

  #details p:not(:first-of-type) {
    margin-top: 10px;
  }

  .secondary-button:not(.hidden) {
    display: block;
    margin-top: 20px;
    text-align: center;
    width: 100%;
  }

  .interstitial-wrapper {
    padding: 0 5%;
  }

  #extended-reporting-opt-in {
    margin-top: 24px;
  }

  #enhanced-protection-message {
    margin-top: 24px;
  }

  .nav-wrapper {
    margin-top: 30px;
  }
}

/**
 * Mobile specific styling.
 * Navigation buttons are anchored to the bottom of the screen.
 * Details message replaces the top content in its own scrollable area.
 */

@media (max-width: 420px) {
  .nav-wrapper .secondary-button {
    border: 0;
    margin: 16px 0 0;
    margin-inline-end: 0;
    padding-bottom: 16px;
    padding-top: 16px;
  }
}

/* Fixed nav. */
@media (min-width: 240px) and (max-width: 420px) and
       (min-height: 401px),
       (min-width: 421px) and (min-height: 240px) and
       (max-height: 560px) {
  body .nav-wrapper {
    background: var(--background-color);
    bottom: 0;
    box-shadow: 0 -12px 24px var(--background-color);
    left: 0;
    margin: 0 auto;
    max-width: 736px;
    padding-inline-end: 24px;
    padding-inline-start: 24px;
    position: fixed;
    right: 0;
    width: 100%;
    z-index: 2;
  }

  .interstitial-wrapper {
    max-width: 736px;
  }

  #details,
  #main-content {
    padding-bottom: 40px;
  }

  #details {
    padding-top: 5.5vh;
  }

  button.small-link {
    color: var(--google-blue-600);
  }
}

@media (max-width: 420px) and (orientation: portrait),
       (max-height: 560px) {
  body {
    margin: 0 auto;
  }

  button,
  [dir='rtl'] button,
  button.small-link,
  .nav-wrapper .secondary-button {
    font-family: Roboto-Regular,Helvetica;
    font-size: .933em;
    margin: 6px 0;
    transform: translatez(0);
  }

  .nav-wrapper {
    box-sizing: border-box;
    padding-bottom: 8px;
    width: 100%;
  }

  #details {
    box-sizing: border-box;
    height: auto;
    margin: 0;
    opacity: 1;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  #details.hidden,
  #main-content.hidden {
    height: 0;
    opacity: 0;
    overflow: hidden;
    padding-bottom: 0;
    transition: none;
  }

  h1 {
    font-size: 1.5em;
    margin-bottom: 8px;
  }

  .icon {
    margin-bottom: 5.69vh;
  }

  .interstitial-wrapper {
    box-sizing: border-box;
    margin: 7vh auto 12px;
    padding: 0 24px;
    position: relative;
  }

  .interstitial-wrapper p {
    font-size: .95em;
    line-height: 1.61em;
    margin-top: 8px;
  }

  #main-content {
    margin: 0;
    transition: opacity 100ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .small-link {
    border: 0;
  }

  .suggested-left > #control-buttons,
  .suggested-right > #control-buttons {
    float: none;
    margin: 0;
  }
}

@media (min-width: 421px) and (min-height: 500px) and (max-height: 560px) {
  .interstitial-wrapper {
    margin-top: 10vh;
  }
}

@media (min-height: 400px) and (orientation:portrait) {
  .interstitial-wrapper {
    margin-bottom: 145px;
  }
}

@media (min-height: 299px) {
  .nav-wrapper {
    padding-bottom: 16px;
  }
}

@media (max-height: 560px) and (min-height: 240px) and (orientation:landscape) {
  .extended-reporting-has-checkbox #details {
    padding-bottom: 80px;
  }
}

@media (min-height: 500px) and (max-height: 650px) and (max-width: 414px) and
       (orientation: portrait) {
  .interstitial-wrapper {
    margin-top: 7vh;
  }
}

@media (min-height: 650px) and (max-width: 414px) and (orientation: portrait) {
  .interstitial-wrapper {
    margin-top: 10vh;
  }
}

/* Small mobile screens. No fixed nav. */
@media (max-height: 400px) and (orientation: portrait),
       (max-height: 239px) and (orientation: landscape),
       (max-width: 419px) and (max-height: 399px) {
  .interstitial-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
  }

  #details {
    flex: 1 1 auto;
    order: 0;
  }

  #main-content {
    flex: 1 1 auto;
    order: 0;
  }

  .nav-wrapper {
    flex: 0 1 auto;
    margin-top: 8px;
    order: 1;
    padding-inline-end: 0;
    padding-inline-start: 0;
    position: relative;
    width: 100%;
  }

  button,
  .nav-wrapper .secondary-button {
    padding: 16px 24px;
  }

  button.small-link {
    color: var(--google-blue-600);
  }
}

@media (max-width: 239px) and (orientation: portrait) {
  .nav-wrapper {
    padding-inline-end: 0;
    padding-inline-start: 0;
  }
}
</style>
  <style>/* Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */

.bad-clock .icon {
  background-image: -webkit-image-set(
      url(data:image/png;base64,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) 1x,
      url(data:image/png;base64,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) 2x);
}
</style>
  <style>/* Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */

.captive-portal .icon {
  background-image: -webkit-image-set(
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAEyElEQVR4Xu3afWhVZRwH8LvdmjVSjKyQbKazia1k1sL6YzXoZdy28/J8f5XRC7hwEVk0hZQCXY2SipCgYgappXMQ5Ya9ELZqoEM3VHqxBkapm21jOBWmbLfudk+0Peeu2+mc3zk9514WbN9/zz18ds75Pc/vPM+JTP9NZzrT+b9Fn2nGxHrainb8ggEaRgLn0IOjaMFroloU/Ssg1yxBLZpxBD00QufpODrRiFX6IiUKXY8XcRAJsryC3nRL7EpsQJ/r0V3iSS0/MKU4D6uoQwLY/P1q4i0aYX9xVqyPRH1jbr8UtfSbE8CDqIK60wBjOEb7aDf24CBO/gN12LjJF4dM+dPAoNgMdNkUxLENQltAFViJdbTWfFTcaRbiMXyCpE1CM4vR5uAzdwB/hcxCDI5jXqGFeAadNJoGH0ErVhg3YPs46Ad9JldNS3GCAbDPkFGG/eJGWktn3PA4IUB3oxPzGY4AXSBLCSTLgfZxx2MLV1Q5tFHeWxWQDNalHulWeo4q9GW4VVShng5J0KgZ8+bkYpcEqIJk6H2y0CiW4H58gGMYQhyn8DlqUUltZIk1XF01kKUW5yhm3gVB3Q76MDaRyXBQR1aIIJnyi6jNZUgs8uTQfUiGDJIxZ9OPfxEwhAO0F70To5NR5skxrsUgWaGDZLQCHBHVxnKxWjwuivRS7McK7na1kpUZkEwUzXbFiZfZcVk8pE6xZ3u34AV5TFJUsV2ObBHU0+Q5wu0eJ21krw+eD4lzBvOYf7wLeyI5DEfLx2l1DPqoSXK8SItis/gm41mlago/9P2UApklZE0pkHhdAv6YIiB8NwEQL9HvUwCkzZHz15g5Gw8jmR0QtsizvOoACUjAIdlOZQUkHpCgDqd1gwRslhX3djZAmDsBwpATJPtDUZPqGFuyUWU453IWu7fFHZOvhjiQ+aqiDheQ/bJjXpf2oP+caRA+cgPJpkxckeZfiIHMgmirC8gee4rz0qF6KV3IJEi86R8kg0oazQ6Iv2Uyoiajt4x/qJ1BfcCe6JQZC/BQ82XvDLYHJPUEK3tmYHTmlotpbzCSwsDomDpc+mD6VgHETB3M5Or2c5xUBvGTq7P98DjBEjqrBOLbD2eDZj7o+aJdhnhooJxUbd/r1cJ+yl1mJMMBGWUSP6zlezT5SIirGNKacEB4bwKEXcxrEN7gThUGSCtILaZXMC+KiGN+5kHYITndkSj7Ko3GTIPMEvtJFKt9LDYgiZtVQTLnqUPUOJcV8KWE95df4m85ps0+CQ/ig68xN72lscF4yveCFTa5g9AXnDR5lczC1Jr+4UhuCsAv6YlH3EDURFbgPCG3Y2altmPG9FIJ8LnoOYLbXNDzgi+Myvkqii9sIuocAHZZuN9tAKi6hnaiBwka9f942y2rzFcut4tZOO+3r5J6xcVmYEeKc9xlPuC3FhDHynBA6LQ5GGA2ftnNl82RqDrIDgb1ZU4AnxzUTc7raDeWhwPCUW0BA/C7gYeP9cWqILSUX8YAgmxxIoF3tYL/DkK9Y/znwm8CI4lvRLV+dVAQThOpOPht8p+ogZ4W9/jijFFD5eXhWPgPCXjMh/pSVYD6pxaywPGOKOIBWfkYhXYKozgvy5/rYBva8avzcx19sSrgT2jJnjJMVMiUAAAAAElFTkSuQmCC) 1x,
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAQAAABNTyozAAAKSUlEQVR4Xu2de2wUxx3Hfxhj5dkSIgOhpICDWilH1AjTGEwdnaCNdbi+2/n+EGlKAvSBopRIKa+KSC5tCU+ZoKaKQ9WSNihqgsXDqRMkHBRBDDi04Q9kGQFG4JAEqF1TIkwSP+BcjBXK7zC3551Ze3zdz/7NnffD3uz8HjND/hAQEBAQEBAQEBAQEBAQEBAQEOAMjeWpOVjF5djFB7gWDWjmNm5DMxq4lg9gF5djlZoTy3OGkmceuzNWoBaiDDu5Dmf4M26/en2GM1yHnShTC2MFj91JNhG+y4lwKVejkTtTv9DI1VzqRMJ3UaoMxlS1Bof5iuunX8FhtQZTaTD1J6EsNU2tRA06uNP7hQ7UkCuxB3kDN/X605t4Q+xB6g8wGWV8njvNXJQUnoH9Op+O/TyD+g5nLEpwXAjwURCK+JCR7ziEIvKf6CRUIC4E+CiIc7DT5LdgJ+eQf8QKuEoI8FdQBi/jL41/05e8jDLIPM50rhYCfBaE+/Cei4DL+Ce2ogy/4We4i2fwG5RhK3/Il5NLwnu4j0yC0dgqBfgvKKmeI/wSopGv0S34/tcRxR/4SDJFZIpwplrCLdzZ54LG9DinalG/Lx5H1+AQP4dNqOSDfIovXb1O8UFUYhM/x6GvRjB+iS/1NP/CGDIDHuU6DQFaY5CaglZxW2d5WdE9RMV3qDn8Op9LKvwcv67mTLmdqOgePI+zQk+rmmLo2eG1Ou8r/beY8+R1AW14PpRFFMlWv0NzqtLxb/w2kk0UysLz3PaVIOdJMkHsfo2pmbHXPFZ1z2A4RPTDb/BG/qLX6r/AK9FRRBzqnk1hFZkAReL/qd8E0SC8iZJwJhGewgXP+v/T9dSEM1GCN2kQaZOBdTo/LfOhhhqOCt3Pxw413FD4iS1CgAWCsNvEN2A36RO9W/wxlggq/uYt0yjH+DW1Ri1Us69eC9Ua/JWPCS1mX+1quAgLrRFEFMvnNnG7cbyDeRh9i2ntPLyTMEi0YSrpgjGo5057BEkw74ab/Ut3hieSjZn8MvbyEW7idm7iI9jLL2NmJPta9ujV/0lVPzHw9Ag9VgiScGl3Zsd5gCh3iPMEasRTIp+vGvWjcKbzAPZ16cF6A2OP+HFZKYgyeLtaQhmUwc/ypylI/5SfDWdiMW+nDO03lxiaLRMk4RA+SF07PuAQaZMhXuyWC8KOXqrfTrpgHXfaLUgWfHo1GBzSLv+gCHHbBUlmjMRHqenBRzNGaoekIuayWJAsAN0Ql7VjL1bgaWcWnsYLeJ/br+u5oF3uCWeKiN1qQRIn3DXHQTN+XXQPCQqH8fJrxag2J0y68FohwHJBEjUblWo4USwfr+Aot3ALjqKsOxUWHcFvq9kGsoWIWyPoEnmgS0SiaFRGR5jKF9bZ8/zwKfIA3u9JNvaSCXipRXo6sYM8oCb0kJK/pCYYKeRwiw1idINJPH6T6sfJBNhmkx6cLb6DPKJeFKJfNFUl7bTpUj8l7wzmPdcF7THUDcTVNunBJtIiko1PuvTgk0i2oRYEm/Twn3KHkCbOI2hFq/MImYGrbJGDj/EUGUHNV/ON9fdYoKYF9diCH4dvI/tAhQWhg704YxEPBCUBJckFBILqA0FJwOTkAgJBZYGgpMUdPh8ISoKallxAIGilbM7HvkCQADVCwKLCYXwsEHTDgiW5Isd5+Nq08V/pJ8h5WK4kSnGxlRMR/6y5u1fPyeVL6SaIBslanxOhVOBSIWjbDQuNOqwWpJ8vLfWQJFML6Dr4eboJUguEoGpKBdnlJzP/WGFaDy70q6AJsjsxpaW2cuBKzOLxa4YFvU/9SO4QOWyksHw4licE1ffwke8aFNSG79oUlMfyyA01V9zA2z02AB82Iucc/s4h6mdkSVrNITewWjxB66kHoqPwcboEElgv7ne1u9FyYXT+Lfv/LqSHIDVf3EF5bysZhcn6btJBEBcKQVW9jMOSLShznkA8DZ6gKWJIqXE3WitG9YcoCfjVwBcUe0jcQS25gQYRnYzVzTzaX70RT1ADuSHDN3Wva0/7WwNbkLo3ITR3Qw69oSxyYcrtfHAgCwplyYmrIUGyZ4JPpJkg/Z+YJDqem9LvJ6Y/SMsI7os0G6T1X/MSFeMr/xeveT4gBOVTyuAXPheIzmEr5xgXlC8EHSA3sEuGGpb147eob/kZamCXTrDqziB+w29FqPQ3WNVNd7i/NPf4rKjJ13THKnejc1wSZq4pW78XLvibMPOQcvWwsuyMrYLcU64aSfvUUd/BxYEhKHcIX5ZJey9lHw+oH3C7HYL0yz7uhUNPqLlWCNIvHLqXnm1rA/Wz9KzRvOAF/NkCQfrNC+7tLxpLgXdaIEi3/cW9gYo8IBb3WyqIF8mEvdcWvH2kQXQEGmwVJFsL1UrvTZw5Woq+zedtFMQ5Urya5r0NeDlpob7HX1ooaLkQdD6U5b2R/ARpgpl8xTZBMpOOMq2lCLF80gS/tEtQLF9qx2TqHXIfcWwmbewShM1Cz3HNeTA6iselk6DicXKuhxL9BXUb00kQ/ij0xJ2x2ksy0RodlS6CoqPQKgRVmFnUuyFdBPEGqTw6yciycHyOMekgCGMSipxV5jYWeIs08G3h+HF+w5mV+jQvsR8lVmBwawoU2SNIXjjJTCmAogTB1WY3NznlfYm//6sYsd5tJ83wbXxKCnKmkx6Jx0BgBXkE//BbkHsdDy9IPdhqfIMldHg4KUCkcn2+OFnDJjrk+IXRpI9aIq3z6cJh5AEnty8E4aQoVMltAU9LmWqJ0U3e9OvjeLcvFDmzqEdQmSCzLpxJAoPbBGKxtyoUWv0XhL9RD2Cx1IM4HiWB2Y0m272N/mp2Hwg63uPbOLGQuZYExrcqxUVMJA/gZ9zudw8RJYCJiaVw7Hf9eelvdovG6HiP+4J86K+ixBZTNEo9aI7dT+7ob5eMkx43GR7kRPhVHMVFvsKX/RU0Y2Ti1BBxl3jA6IbbtUKRJSGI0FObqA/ryAWjW7bjZHS8rYKi43HyJj1bXMIR85v+oxETbRSEiWi8Sc9ut6jfl2MjcNGZbpsgZ3oPTVyHoneTBjoHj7TzIpsE8aKbJxOo1zr1Sf/oGlQWDrND0PWgQujRyIcaO/zotJqiIcjP65DG02Py+Cx0YEX4NtsEYbfO2GP+ALZTKLJJELbov7nMH+H3FsbYIAhxrNOY9/h5CCQ+5w3RUf0rCM26QYXPx4iilTcWj+svQdhvIiT1/SBadGBzLL+vBSHOa00mNPw/yvgEL+ecPhNUJ7OF9jxHS5MfMYF9vMh5mAb5KqiFl4YzyVYwGttSGDq3qQVqQu4Q84KwDaPJDvQP5EcH6vltrDemp1qEzHYTK+jjAwOqYgU00IhOQoX/274jjgrR3zPgdsYvQb1vcupR4oylgQ8mo8xwb8d5lGEypROhLDVNrUSN3nan6ECNWqmmhbIoXQnf5US4lKvR2CsxjVzNpU5ELFhKd5yhsTw1F6u5nKtQw7VoQDO3cRua0cC1qOEqLsdqNTeW5wwla/gvpXzJeo7GTncAAAAASUVORK5CYII=) 2x);
}

@media (prefers-color-scheme: dark) {
  .captive-portal .icon {
    filter: invert(1);
  }
}
</style>
  <style>/* Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */

.https-only #main-content a {
  color: var(--google-blue-700);
  text-decoration: none;
}

.https-only .icon {
  background-image: -webkit-image-set(
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAABAlBMVEUAAADcRTfcRDfdRET/gIDcRjr/ZmbjVTncRDfcRTfcRDfdRDzgSTncRDjeSDvcRTjbRDfbRDjeRzvcRjfbRjjcRTjcRTjcRTfdRTfcRDjdRTjcRTjbRDjbRTjbRTjbRTfcRjjdRDrcRjfbRTjZQzfcRDjZRDfZRzbWQzXXRDXXQzbXQzbWQjXYSDvWQjbbRDfOQDPSQTTUQjXCPDDNPzPJPjLGPTHVQjXMPzPRQTTWQjXLPzPDPDHYQzbAOzDTQTXHPTLIPjK8Oi++Oy/FPTHEPTHPQDTQQDTUQTXBPDDKPjK/OzC9Oi/////PQDPRQDS3OS66OS7TQTTEPDHXQjbMPjMBhLaWAAAAL3RSTlMA4tgPAhYFCcL98B4x9ie1+s49WICbqXNKZY3pjuqcgVdLZnL2qKg9zmXpjfontV8LANsAAAJrSURBVHhe7ZTnduIwFAY3ARIgBAg9vW1v173ROylby/u/yso2Fx3MNaxs9h/zAHM+Sfa8+M/s2LFjx+3tdjwH+/sHWxHVAerb8KSyANnUFkRXwLiK78llgJHJxRalwSMd11OGOeV4nsM9FO0dxhJdw4LrOJ6jYy46PoohqgEHatE9JViiFNWTPIElTpIRRXcQ4C6aJ3EJAS4TkUQXsMJFFE++CCsU8xFEBSAoiHsaQNIQ7yuQCFe3DiHUhftKIlzdKoRSFe0r8sXDAkSoumkIigYaIOkIfeWi56EESFm8r1w0fFIl4epWgBA9qOMpmirCfeWijtoa9WSx6taAELFBRl/vilS3BJRIbRk9/VFTsLrifUXRuNfXLU0y/7m6p0CKxqN+v6lJU/k3eJxu7Os5LWKDHi1tYstKG1zON1X3DGiRMR80Mx3fdCbc1+bQe3o2SJrYXcV0fFMxL9xXiz0987BBtux65qaCeF8lHCR3FabBTQ3xvk4M1yN5B/Mw2+urew8hTP1BM38Qnu5evK8gMw+7IcfH9E3ZlEBfMSO//Kf35+Cm6ua+rhbSYDeEa9CUyW3qK1HIjj5DBz8dWd0bWCd6Ult/uMPEr+BmbV/JHrVG/a9MsEybV5fsK50R3frmBFXtCtVXmt73H4PhQ4t9k9rkJ55tYXwZrO4rCEUfPHfUEcuaZC/umw97TfaVpslu2tCb2lRWnBlKFtf+huwrjaa6Pxv7RfgW7nubJPtKI/X0puQO4k/Pfe/ovtLY7KbxVwve0/sE3VeaLosIbkEDvt8Hoq/hKGwQYvoq5OMnoq/hLAbgc/FVn33PX7pAfE5QHR6fAAAAAElFTkSuQmCC) 1x,
    url(data:image/png;base64,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) 2x);
  filter: grayscale(1);
}

@media (prefers-color-scheme: dark) {
  .https-only .icon {
    filter: invert(1) grayscale(1);
  }
}
</style>
  <style>/* Copyright 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */

.insecure-form #main-content a {
  color: var(--google-blue-700);
  text-decoration: none;
}

.insecure-form .icon {
  background-image: -webkit-image-set(
      url(data:image/png;base64,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) 1x,
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAAEp1JREFUeAHtnVuMFkUWx2dgRlBhvUxQSZTsw25wAUPiNQTRgFkv8YIbZhBcB8hK2NVkXnxRY0xMDFFffJkHsyxskBFRGIJ4iWjioLJqdL3EENFZ35AELxnRHZFFBtjff+gePsbv0qe6+vv6+6Y66XR39alT5/zPv6urq6q7m5rCEhAICAQEAgIBgYBAQCAgEBAICAQEAgIBgYBAQCAgEBAICAQEAgIBgYBAQCAgEBBoTASaG9Ot8l6tWLFi4sGDB3+P1HStx44d0/a85ubmyWwnHz9+fHgbHTdxPEj6IMfD2+j423HjxvWTPryeeeaZX65fv/5/HI+pZUwQ6I477vjD0NDQAgiwgOBfynYa23E+I43OY+jcy/Zjtn0tLS19zz///Oc+y8ijroYkUEdHxxSCuBDAF7DOZ/+CWoAPmb6m3J2sfexv37Jly3e1sCPLMhuGQF1dXRP2799/G2TpBLCbWFuyBM5B9xB5XoVIPVOnTn2xu7v7sIOO3GWpewJR21xJG+ZukF3MenbuEC5u0A8kb6YNtY5a6YPiIvWRWrcEWrx48XyI8xA1znX1AXVxK6mR3oBIqzdv3qxbXd0tdUcgapybIY2IM6fu0C5jMER6j3U1NdIrZcRyd6puCARx5kCabtbLcoeiR4Mg0UesXRDpPY9qM1OVewItW7asjT6bJ0DgL6y5t9dTpI6j55/0Ld2/YcOGAU86M1GT24BQ0zS3t7evxOvHWNsy8T7/SkWeB3t7e9dSK4lUuVtySSBuV9NoID8LWnNzh1htDHqHhvad3Nb21qb40qV67Y0tXUzyMzxd3Urt8wk5AnlOwjZXmAibk0n52MtNDbRq1arWgYGBx4HlvmpAwy3hJ8rpJzD98ZgW+1+RPjh+/PjB0047bfDQoUMa+2o6/fTTJ//yyy+Tjx49OjxOhsxFJA+PobE/PJ5G3kmSrcLyZFtb2wNr1qw5UoWyKhaRCwItWbLkIsaqthCEqypa7CggwqD/bbZ9bPsuueSSTx955JFjjupOyYaecbt3756Nbo21acztGraZEQr97zPW1vHcc899dYohNTioOYFo78ygvfMavl+Ygf8aQe+lhumZMWPGLgKt4YTMF8pp2bNnzzz86oRI7RSo0X3fyz78uoF20R7fii36akqgqG/nZUA+12J0JVlI8zrr08htA+BDleSzPM+t+YwDBw7cjo/LWa/3WRY+fs96Sy37jGpGIMhzM1foZgA9wweoAKnb0VbaL6uZRvGpD52+dTCtZDbtqIfQuwgy+XqA+ZmaaDEkqkkPdk0IRP/OnwFwPUCmHjGPiPNMa2vrY5s2bfrCd9Cz0Ld06dKLjxw58iC67/JEpCFItBwSqeujqkvVCRTVPC/gpQ/yfEgA7tm6deuHVUXNU2GLFi26nAvgKXy43INKkej2atdEvqrRRP6rzRPdtlKRB9APANa9s2bNuqpeySPAZLt8kC/yKRGIpYVahK0wLi3i/0zVaiAcm8GVtos1VYMZoHfQL7O8p6fnW/9w1E5jZ2fnefQ7PQ0+N6axAnzUsJ5HTVSVp7OqEEj9PNzz3wWYNI/qqqIfZt7MEwCUy3GhNIFXXsjTTG/z/dQkj3KYppbeN3HixDkbN27cl9amSvkzv4Wph1mdhBiShjzq85jPVfV4o5JHgZJv8lG+cpgm+BcePny4V9hLb5ZL5gTS8ARXVpoe5k8B9AqA/VeWQORJt3yVz9jk3B0hzKOhoUxdy/QWpsE/+j1edPWAK/It1oUA+qOrjnrOR7vxLIiwnfVaVz/oF7uN2/5Lrvkr5cusBsL5adzL11cyoNR5iLNt0qRJN45V8ggX+S4MhEUpnCqlKwaKRSU51/OZEIgrphnDn2Xr9MQlwFg7xuKbnqMDKQyEhSuJFIMoFpncbTIhUDST0Gk+D0C9xVWnyVNHR4M5Vo+FhTARNo4YzI1i4pi9dDbvrIzmMPdTpMs0VDWYrx3Lt63SoWpqUpuI2kQkml1OrsS5AeZYT/c9x9p7DRRNgHchjx7Vx3Sbp0TgR5J1YQkjElwe8eOXE0b0+djxWgNxhWio4h0Ms+pVJ6H6eWr2qM64lKlzkmEIq48+4jWsA5yvBuedHLQYlR4H57ng7O2VIa81EA22bhwyA4tTD9eSPMYg1FxcWAkzB0Oaoxg5ZC2exRuBuCr0xuhlxYspnUrDcIeGJ0pLhDPFEIiGdHYUO1cuTTFSrMrJWM55IxCGaaKUaYE8BzQwytZ0+zAV0qDCwizCzjyK7xKrUjB6IRA9zvoGj3kaASA81Gij6qWAziJd2AlDq27FSjGz5ism74VANOjMTuD4hzNnzvx7MaNCWnIEhKGwTJ7jhKRLzIqVkZpA3E+vhNGmT6zgsD4Hd4+v12qKOTZW0oShsBSmFp8VM8XOkqeYbGoCYcjKYoorpD1TzzMJK/hW9dMRls9YC3aM3SnFpCKQPiuHER2naKxwoCtFE+AriIXTRgSEqUMt1KEYGos6RTwVgfRNQrRZPyu3tV7enjgFqZwfRJhuNZp5dhRDY7aT4qkIhJplJ1Ul29N7W8kkg5QVARdsuYPoo6TOizOBaIDpU7qmCeBUsa/n9aU/ZwRzlFHYCmOjSTcplsY8I+LWsZSRjJBnIQem/Dj39IiCnO3UcmzLJxTCmNhYXqFuiWK51sUO5xqIwhYYCxxE3nlmnbGssSwujIW1ZbHGckR3GgKZejK5MnoZBKzphw5GvG7gHWEsrI0ummJZqNuJQNwz9ZKg6fcBjB73FBYc9rNDwIq1Yqn/ibhY5EQgusFNjOWK+Enf53ExMOSxIyCshbklp35GY5GPZZ0IhHGmwmD429X6uFPs2FjeCmthbsHAGtNYtxOBMO7SWEGSLcb1JZELMv4QsGJujWlsqZlA+lkbxpneM8K4QKAY8SptrZgrpoqt1TwzgfSnP4xLnA/DftIHLa2GBfl0CAhzYZ9Ui2Ia/cUxaZZhucREKNCqz9palv4wbcMClx/ZCHO9XmVZrLFtypxAMNvqhMXhIFsGAQfssycQj/CmQuiTCAQqE+QsT1mxt8ZWtpvGspSB++r5MFu7SZe6IFA9vReWFHjkTNgrtgbdw6IutzDTR7Mh21dWo4K8HwQcsDfFVla6EMj0CX9YbR3Y84Ne0KK7hRV7U2ydCASrTSxlkpPViRB6TwhYsbfG1olAZDIRSH+98YRHUGNEwAF7U2xljvkWRrVoKiT+ZZLR9yDuAQEr9tbYykQzgTz4FVQ0EAJmAnGfNN2S9LO2BsKrrlyxYm+NrcAwE4g8JgLpT391hXoDGeuAvSm2gspMIOujoX4T2UAxqStXrNhbY+tEIDKZWOryaFhXUcqxsQ7Ym2LrSqDEUwRUAKzWD2rDUgMErNhXpQ1EId8YsTANvhp1B/HyCFixN/8BydwGqsYIb3lMwtmkCFhH162xlR1mApHHOsJrvQqS4hPkKiDALcyKvSm2Kj5zAlHGdGbHuZRTAZ5wuhwCEeb5IxBfO/8SZh8rZ3zhOdpMk3bv3j27MC3sZ4+AMBf2SUtSTBXbpPKxnLlm0M8/MGxvrCDJFuMWJJELMv4QsGKumLr83MZMILmIcR9bXMW4QCALYB5krZhbYxqb6EQgjDO954Vx13BPNk+fjY0MWxsCwlqYW3JZYxrrdiJQS0uLiUAYN2nPnj3z4kLDNlsEhLUwt5RijWms24lAfAnrcxj+dawkyZY+iVSfUktSRpA5gYAVa8VSMXXBz4lAUUH6W0zihSuinc/CnJ44QxB0QkAYC2tjZlMsC3WnIZDpNkahGpX/U2HhYT8TBISxdQaENZYjhjsTiGpvO1qGRjQl2OHKWJ5ALIikQACMVxizD0WxNGY7Ie5MID6l9h0qXrWUinPX8yWs0KloAc0gK2zB+I+GLBJ9NYqlMdsJcWcCKTvMNX+2jklO5h+zOHk2BjO5YOsSw0JoUxFo6tSpL6Lsh0KFCfYXLV269OIEckHEgECE6SJDFon+EMXQmO2keCoCdXd3H0bV5pPqKu9RxY47cuTIg5Ulg4QFAWEqbC15kN0cxdCY7aS4tcCTOaM95pCs+1Vi5YS7+JjB5ZXFgkQSBCIs70oiWyjjGLtCFU7TOU5RQAPsA+6jb5ySWOFAVwp5ngrTPCoAleC0MBSW1tpHMVPsEhRRViR1DSTtMNn8AxUcvvyzzz77a1nrwsmKCAhDYVlRcJSAS8xGqRg+9EIg/iC8E0a/V6yAcmk4vrqzs/O8cjLhXGkEhJ0wLC1R/IxipZgVP2tL9UIgFYlRZkdw/hze39bPQZptZgdpYRZhd44VDZdYlSrDG4G4n76CYR+VKqhUOkDcyB+E7y91PqQXR0CYCbviZ0unKkaKVWkJ2xlvBFKxGNfF5rjNhKYmRo8fZRDwamu+sSovrISZg//Hoxg5ZC2exfutg0fKtRR1d/Hiyqbuo2F3BVeHaZpIWY0NeBLyXAB5/o1rFzq4t47/oq10yFcyi9caSKUwMVu3o4GSJZY+cSHA7ACgs0qLjO0zwkYYgYILeQai2HgF0TuBNmzYIPK49jRrMHC7yyf3vaKSQ2XCRNhgmutg9INRbLx65/0WJutwtLm9vX0Xu3NdrOU+vY21g9vZUZf8jZaHmmc8mG5h1Vwfl+Wd3t7eeWBqbp9WKsx7DaQCZSjtmTvZfl/JgGLnBZQACzVRU1NU8ziTRzGIYuGdPMOxLhZAX2k8at7KFAON2DstOP8W60Jqoh+dFNR5JrV5uJC2s17r6gpfar2NTsOXXPNXyje+kkCa83Sz/4e/5/0GHXMc9fwW8G6aNWvWC7xpYPqsjGN5uckGefS0pTHGq1IY9SS3ru4U+StmzeQWVlhqW1vbA9Qi7xemGfdn67EVQMdMP5F8lc/g5NpgVjPifWFvxNosnkkjerQVS5YsuYj5Ku+S7vL4Gasb4l7+MNXxE4CTyf08LqhWW2rbZvUwQx51EqZ5EXPfxIkT52zcuHFf1r5UhUBygqtKf3rexXpuGqcgzw6+Prq8p6fH/DGkNOVmnVcDo9HYlnl4otA28PmedR7txj2F6VntZ9oGKjSaNsx3M2fOFIGWkt5aeM64/zv+MLwSXf/lav34zTffrOvaSPN5pkyZ8jdq6G1gc4kRi9HiP1NL3wh5Phl9IqvjqtVAsQPURDdTRb/AcZoqOlandsK9dM9/GCfU01YzCaktNBnMPJ+niJ+6xd8OebwNlBYp41dJVSeQLIBEd0Kip9lNTSICcAw9z7S2tj62adOmL6Q/74smwEfzwu+CPD4eZESe5ZDn2Wr7XhMCycmoJtKE/DN8OB0RaSv9Hqt5z/tTHzp969B7W9GrN4s8EUcm6ra1uNo1T4xNzQgkAyDRHIB8mTVVwzp2Jt5CptdZVcNtA9hDcXottvio7wGoZ3056/U+bcBHNZhvwUfzbFBfdtSUQHICgGdwO3uN3TSP+KXwGATgXq7QHjo0d9FgHSol6DOdclr0iRX86oQ07eie7FN/pEvTX26APFV52iplf80JJMPUT8STlcZ70vS6lvJxOB0i/YT+t9n2se3Tf9UJtNpPqRc9SembhOhegO4FbK9ha/o+j8UI9L8/YcKE9mr081SyKxcEkpGrVq1qHRgYeJzd+yoZ7eM8QdDQSD+B7udK7o/2vyJ9UH/608/a4v9t6a83+nEJ7ZfJyE9G5iLkp1PDTGdfX0KdniVh0F+4PKke5jVr1hwpTKzVfm4IFAOgAVgCs56AeG0XxfrrdQtRNaq+IsuBURdsckcgOUG7aBok0iOp03wiFyBynucdyHMn7Z29ebMzlwQSSNRAmpS2kt3HWNuUNgaX4dmdjKivpQbKZY+7j06sTOIqwOhh/gfzeNXGWMeaSwAzcf6Er+vkuzDIK3nke25roNGBifqMuqmZLht9rpGOIctHrF217Nux4Fk3BIqdgkg3Q6KHWF0nqcWqcrWFNO+xroY4VR3LSgtC3REodpintfk0tEWk6+K0etxCmjdoIK/29a56tTGoWwLFQFEjXQmJVrJ2kHZ2nJ7z7Q8QZwvrWmqc1J9YqaWvdU+gGLyurq4J+/fvv43jZZBJk7JSj/THuj1t9TVUvRS4QZ+VS/tlME82pVbTMAQqRIJaaQokWkjaAtb57F9QeL5a+xBGr2nvZO1jfzu1jb5s21BLQxJodIQglAZs5xNEjVVdynYaW69dGOg8hs69bD9m20e7ZieEqelA52gcsjgeEwQaDZxe1jt48ODvSR8ex4JcGtM6n2ONmk+CANpqzGt4FJ3jQY41sq+txtAGSfsGkgyPoXHcT5/Nly7/2yJvWAICAYGAQEAgIBAQCAgEBAICAYGAQEAgIBAQCAgEBAICAYGAQEAgIBAQCAgEBAICAYEcIvB/Q079+h6myXwAAAAASUVORK5CYII=) 2x);
}

@media (prefers-color-scheme: dark) {
  .insecure-form .icon {
    filter: invert(1);
  }
}
</style>
  <style>/* Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */

.lookalike-url #main-content a {
  color: var(--google-blue-700);
  text-decoration: none;
}

.lookalike-url .icon {
  background-image: -webkit-image-set(
      url(data:image/png;base64,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) 1x,
      url(data:image/png;base64,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) 2x);
}

@media (prefers-color-scheme: dark) {
  .lookalike-url .icon {
    filter: invert(1);
  }
}
</style>
  <style>/* Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */

body.safe-browsing {
  --google-red-900: rgb(165, 14, 14);
  --google-red-700: rgb(197, 34, 31);
  --google-red-600: rgb(217, 48, 37);
  --google-red-500: rgb(234, 67, 53);
  --google-red-100: rgb(250, 210, 207);
  --google-red-50: rgb(252, 232, 230);
  background-color: var(--google-red-600);
  color: white;
}

.safe-browsing :-webkit-any(
    a, #details, #details-button, #proceed-button, h1, h2, p, .small-link) {
  color: white;
}

.safe-browsing button {
  background: white;
  border-color: white;
  color: var(--google-red-700);
}

.safe-browsing button:active {
  box-shadow: 0 1px 2px 0 rgba(165, 14, 14, .3),
      0 2px 6px 2px rgba(165, 14, 14, .15);
}

.safe-browsing button:hover {
  background: var(--google-red-50);
}

.safe-browsing .secondary-button {
  background-color: var(--google-red-600);
  border-color: var(--google-red-100);
  color: white;
}

.safe-browsing .secondary-button:active {
  box-shadow: 0 2px 3px rgba(0, 0, 0, .5);
}

.safe-browsing .secondary-button:hover {
  background-color: var(--google-red-500);
  border-color: var(--google-red-50);
}

.safe-browsing .error-code {
  display: none;
}

.safe-browsing .icon {
  background-image: -webkit-image-set(
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAA+VBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9/f3////9/f36+vr8/Pz7+/v7+/v7+/v7+/v////r6+vn5+fk5OT5+fn19fX4+Pju7u7v7+/o6Ojx8fH09PTy8vLz8/Pj4+P39/fm5ubp6eni4uL8/Pzw8PDt7e329vbs7Ozg4ODh4eHe3t7l5eX6+vrd3d3q6urf39/c3NzbRDf7+/vb29vW1tbZ2dk+D9arAAAALXRSTlMA/eIxBfACHj3YwhYJDyfOtfr2WHObgEqpjellgY6c6mZLV3L2qKjOZemN+rUv7NpAAAACcUlEQVR4Xu2U53baQBQGAxiMaQZT3Wt6rnql9uKW9v4Pk5XEspG4WFmJ/GMeYM635cy7/8yePXv23N7uxnNwdHSwE1ENoLYLTz4NkM7vQHQFhKv4nlQCCIlUbFEOXHJxPVVYUY3nKSSpKFmIJbqANRdxPIcnTHRyGEPUAga0onuy4CMb1ZM5Bh/HmYiiGwhwE81TvIYA18VIokvY4DKKp1SBDSqlCKIyIJT5PU1AafL3FVC4q1uDLdS4+4rCXd06bKXO21fKdxcNKFzVzUFQ9KoDJRehr0z0tBgBpcrfVyZavAxM7uo2ABHNO8s2NTW4+8pEs4HUMxS+6rYAEZFBYl+Y8FQ3C5hoIImGMNVVvLp4X1FRZ2n0BU035X+u7jmgomWv/zzWR23lB7ich/b1DBeRQVNNty1FHYLDWVh1TwEXic4gs6105UfPdMrd1/HCffrnqTayrYkqP3qmSom7r9q84xyMDLIUx7Mylfn7OvIGmbYyUYmGbmry99UWnYOZ7sFc5OHb1b2HLbS9QV1vED3dPX9fQXFuWiEeF9kzpfMcfaUZkbyn9+bQTfXwvm4W0iA3RNdQUyIV1lekkDOhSx3sdGh17+At0ctA0plDpr/gLqSvSI+kXt8mAj9DVl20r3hGBM0iOwKmBtZXHOPX79fFXCJ/Ure79Gxr40Owuu9hK8LPp1mnR7JmWuv7ZsM+oH3FGZObFoWx3iY/Ul1J2LVn0b7i6B2RZM1WumwL833MoH3FMQ1hPHIGsadnvk94X3EsctPE4xK8p89FvK84ExIRuoUa6Pt98fU1DJUMosj+3/S15OtrGOsB9LnYqm+e5w+es4JAhYQDdgAAAABJRU5ErkJggg==) 1x,
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAABPlBMVEUAAAD////////////////////////////////6+vr7+/v7+/v7+/v9/f36+vr7+/v7+/v////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9/f3////////////8/Pz////5+fn////////6+vr////////8/Pz7+/v7+/v////k5OTh4eHf39/e3t7g4OD6+vrbRDf5+fnv7+/x8fH09PTY2Njc3Nz39/fq6ur4+Pjz8/Pn5+f7+/vZ2dnW1tbt7e3U1NTV1dXl5eXr6+v19fXy8vLs7Oz29vba2trb29vo6Ojm5ubu7u7d3d38/Pzp6enj4+Pi4uLw8PD///+BQ30nAAAAQHRSTlMAHhYFDzEJAifiwvb98M76PdjqtoGpZll0c46qj1icTJ1KS42A6WWb2WdadYK1cvCb/cJXV+KA9qioPc5l6Y36uRjySgAABXVJREFUeF7s1kuKwlAUBNDS+JtqggkkmODIH4gPRIgD11P730BDI6HV260Z1Wu4ZxUH/4tzzjnnnHPOOeecq2tEJdlsEsRkT+4RkeGRPA4Rj4YkG0RjfCLJ0xixCPwWEIkd73aIwuTMu/MEMTiwc4AeBhd2LgPolfyhhFzLBy3Eplc+uE6hteWTLaRGCz5ZjKBU8UUFodmNL24z6KQ0pJCpaaohksxpmifQKGhjIXurSbbZhr9qRG81yTYbaJJtNuefcsFbTbLNZnwjE7zVINtsybdK4VttreytHdlml/zIUvTWjmyzFT9USd7akW02pUm22TV7WOveKttswV4K1Vtlm12xp5XmrbLNBvYWhG+15YK3qjab0STb7Fcv5tmcOBKE4Q2Xc7KrTJW3yhs/2RsuZwvBjsQShPd0JxCyJVmA5v//getpgYextLSYKdHf+PbUO93No36Ht77eqHCvNnvASaBLp4rooClvpYGurpx92Sx6Kw3Uv873ZbOHvA7Qtd12m7ZZ6a00UN+225a7F5tt8XpA7Y61rJi1ViPeSgPZ7XZnuVh4zdsseisNhAEtzgOvaZt9yGsCdSwLeJKk16DNSm+lgSCghQAax9NGbfaI1wQSD7YIgnE8H0a3iY4a8FYSyMKAxgJoMqBs1txbaSDs6AR5Zv6Asllzb6WBIKAkiefzCQA5A8Jmjb2VBtoMKHXcUSM2e8x3ADoPAAh4Jr7v5G7IVKLjhr21DHS+DshP0xyAel3CZk29lQa6ebAUeLxe74KwWTNvpYGSFVDqOK4LPFF0QdisibfSQBsdjQFNo9EoI2zWxFtpINiJw+Fs5hcBTaeDwaibETar76000GZAnggIeLqSyNxmD/luQOM4LngceDBP8ACQSnTY+L111geRtqxlMfLDAsiFkV8H1GWSyNBmW7xO+eiJyo7O87B4MCaA1Ixazd9bUwgIgFYd7a8Dwo4GIqYQgc02f291kEcd+YJHVmZusye8djkAlKxHHnjEiEUIVOTDFKKTPdxbXdnRjghI7GjgUSqTNmvurTRRkMQAtBp53IkjJuNRiY72cW8NiwdLHdyJgmcdkGTKTGz2Gd+xPOhoGVAUjZgCo8zas33cW3lviFqWhyF2ND7YbaZM2qy5t9JEs8ITPexoJlFksUzTZo+5Tk3FiIWh7KAKpEzarLm30v/2ckczlYXdsGU6NvuY6wFdJjn+y4OXKR3EytP/WMNbNYD6Y9Ag8WCs/F4yo51t9oBrAoGJzJV/+WokJDow9NbaF7QJAKkNpMyb9KPfjL2VBrLtznLpQ0DlYNTKdrHZp1wfqA0iEjhMYsislN9I9LSmtz7RBxLmGCSxW9k9pYye1LPZR9wACNQagIbutgaSfvTI3Fvp+xDwgDd6ZERAVM9mT7kB0HIZJIn4Ekp7W+KRRKfG3kqfYyAg4HHy6ZZwpB+daHgrVfG///3z5u1l38aODsbFrcH1opJ7VPgRabNnfPeaI8+13REdPV4FBA4CRkQyZWekt2rU8M3lVREQns9AG4XmgxLRjc0+v0d4q1ZNVjznNw8WgsTiviaRXmh5K/19jzsaL+biwVwhsbeXdLUfffa+nrfSX9P4rYjnRcdFBWGSQ+KUf3/ybp7vuX6lFp7woaN9eDBxiUEIwCDH/wfCWzUrXwTrgLCj14rGuhTSxx8Q3qpZLnSQ4MlXHS2He8u+xvqJ8FbdCmEFTXxcQdFAJkPP2qfVNvsLNy1vjg9WBKQsQMKPfiW8Vbt6SkdLFkb50VeEt2rX1MGA4MHUlhkRfvTFh4S3alcEHaSczmr20R+Et+rXCDu63DJsux/9+R7hrQZE0NFEHlVh/UV4q0F1B6zSEdlWF/lSsdn/AccLgKctjBheAAAAAElFTkSuQmCC) 2x);
}

@media (min-width: 240px) and (max-width: 420px) and
       (min-height: 401px),
       (min-width: 421px) and (min-height: 240px) and
       (max-height: 560px) {
  body.safe-browsing .nav-wrapper {
    background: var(--google-red-600);
    box-shadow: 0 -12px 24px var(--google-red-600);
  }
}

.safe-browsing-billing .icon {
  background-image: -webkit-image-set(
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAABAlBMVEUAAADcRTfcRDfdRET/gIDcRjr/ZmbjVTncRDfcRTfcRDfdRDzgSTncRDjeSDvcRTjbRDfbRDjeRzvcRjfbRjjcRTjcRTjcRTfdRTfcRDjdRTjcRTjbRDjbRTjbRTjbRTfcRjjdRDrcRjfbRTjZQzfcRDjZRDfZRzbWQzXXRDXXQzbXQzbWQjXYSDvWQjbbRDfOQDPSQTTUQjXCPDDNPzPJPjLGPTHVQjXMPzPRQTTWQjXLPzPDPDHYQzbAOzDTQTXHPTLIPjK8Oi++Oy/FPTHEPTHPQDTQQDTUQTXBPDDKPjK/OzC9Oi/////PQDPRQDS3OS66OS7TQTTEPDHXQjbMPjMBhLaWAAAAL3RSTlMA4tgPAhYFCcL98B4x9ie1+s49WICbqXNKZY3pjuqcgVdLZnL2qKg9zmXpjfontV8LANsAAAJrSURBVHhe7ZTnduIwFAY3ARIgBAg9vW1v173ROylby/u/yso2Fx3MNaxs9h/zAHM+Sfa8+M/s2LFjx+3tdjwH+/sHWxHVAerb8KSyANnUFkRXwLiK78llgJHJxRalwSMd11OGOeV4nsM9FO0dxhJdw4LrOJ6jYy46PoohqgEHatE9JViiFNWTPIElTpIRRXcQ4C6aJ3EJAS4TkUQXsMJFFE++CCsU8xFEBSAoiHsaQNIQ7yuQCFe3DiHUhftKIlzdKoRSFe0r8sXDAkSoumkIigYaIOkIfeWi56EESFm8r1w0fFIl4epWgBA9qOMpmirCfeWijtoa9WSx6taAELFBRl/vilS3BJRIbRk9/VFTsLrifUXRuNfXLU0y/7m6p0CKxqN+v6lJU/k3eJxu7Os5LWKDHi1tYstKG1zON1X3DGiRMR80Mx3fdCbc1+bQe3o2SJrYXcV0fFMxL9xXiz0987BBtux65qaCeF8lHCR3FabBTQ3xvk4M1yN5B/Mw2+urew8hTP1BM38Qnu5evK8gMw+7IcfH9E3ZlEBfMSO//Kf35+Cm6ua+rhbSYDeEa9CUyW3qK1HIjj5DBz8dWd0bWCd6Ult/uMPEr+BmbV/JHrVG/a9MsEybV5fsK50R3frmBFXtCtVXmt73H4PhQ4t9k9rkJ55tYXwZrO4rCEUfPHfUEcuaZC/umw97TfaVpslu2tCb2lRWnBlKFtf+huwrjaa6Pxv7RfgW7nubJPtKI/X0puQO4k/Pfe/ovtLY7KbxVwve0/sE3VeaLosIbkEDvt8Hoq/hKGwQYvoq5OMnoq/hLAbgc/FVn33PX7pAfE5QHR6fAAAAAElFTkSuQmCC) 1x,
      url(data:image/png;base64,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) 2x);
}

.safe-browsing-enhanced-protection-message {
  background-color: rgba(0, 0, 0, 0.2); /* black 20% opacity */
  border: 1px solid rgba(0, 0, 0, 0.3); /* black 30% opacity */
}

.safe-browsing-enhanced-protection-message .icon {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iI0ZGRiI+PHBhdGggZD0iTTkgMjFjMCAuNTUuNDUgMSAxIDFoNGMuNTUgMCAxLS40NSAxLTF2LTFIOXYxem0zLTE5QzguMTQgMiA1IDUuMTQgNSA5YzAgMi4zOCAxLjE5IDQuNDcgMyA1Ljc0VjE3YzAgLjU1LjQ1IDEgMSAxaDZjLjU1IDAgMS0uNDUgMS0xdi0yLjI2YzEuODEtMS4yNyAzLTMuMzYgMy01Ljc0IDAtMy44Ni0zLjE0LTctNy03em0yLjg1IDExLjFsLS44NS42VjE2aC00di0yLjNsLS44NS0uNkM3LjggMTIuMTYgNyAxMC42MyA3IDljMC0yLjc2IDIuMjQtNSA1LTVzNSAyLjI0IDUgNWMwIDEuNjMtLjggMy4xNi0yLjE1IDQuMXoiLz48L3N2Zz4K);
}
</style>
  <style>/* Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */

.ssl .icon {
  background-image: -webkit-image-set(
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAABAlBMVEUAAADcRTfcRDfdRET/gIDcRjr/ZmbjVTncRDfcRTfcRDfdRDzgSTncRDjeSDvcRTjbRDfbRDjeRzvcRjfbRjjcRTjcRTjcRTfdRTfcRDjdRTjcRTjbRDjbRTjbRTjbRTfcRjjdRDrcRjfbRTjZQzfcRDjZRDfZRzbWQzXXRDXXQzbXQzbWQjXYSDvWQjbbRDfOQDPSQTTUQjXCPDDNPzPJPjLGPTHVQjXMPzPRQTTWQjXLPzPDPDHYQzbAOzDTQTXHPTLIPjK8Oi++Oy/FPTHEPTHPQDTQQDTUQTXBPDDKPjK/OzC9Oi/////PQDPRQDS3OS66OS7TQTTEPDHXQjbMPjMBhLaWAAAAL3RSTlMA4tgPAhYFCcL98B4x9ie1+s49WICbqXNKZY3pjuqcgVdLZnL2qKg9zmXpjfontV8LANsAAAJrSURBVHhe7ZTnduIwFAY3ARIgBAg9vW1v173ROylby/u/yso2Fx3MNaxs9h/zAHM+Sfa8+M/s2LFjx+3tdjwH+/sHWxHVAerb8KSyANnUFkRXwLiK78llgJHJxRalwSMd11OGOeV4nsM9FO0dxhJdw4LrOJ6jYy46PoohqgEHatE9JViiFNWTPIElTpIRRXcQ4C6aJ3EJAS4TkUQXsMJFFE++CCsU8xFEBSAoiHsaQNIQ7yuQCFe3DiHUhftKIlzdKoRSFe0r8sXDAkSoumkIigYaIOkIfeWi56EESFm8r1w0fFIl4epWgBA9qOMpmirCfeWijtoa9WSx6taAELFBRl/vilS3BJRIbRk9/VFTsLrifUXRuNfXLU0y/7m6p0CKxqN+v6lJU/k3eJxu7Os5LWKDHi1tYstKG1zON1X3DGiRMR80Mx3fdCbc1+bQe3o2SJrYXcV0fFMxL9xXiz0987BBtux65qaCeF8lHCR3FabBTQ3xvk4M1yN5B/Mw2+urew8hTP1BM38Qnu5evK8gMw+7IcfH9E3ZlEBfMSO//Kf35+Cm6ua+rhbSYDeEa9CUyW3qK1HIjj5DBz8dWd0bWCd6Ult/uMPEr+BmbV/JHrVG/a9MsEybV5fsK50R3frmBFXtCtVXmt73H4PhQ4t9k9rkJ55tYXwZrO4rCEUfPHfUEcuaZC/umw97TfaVpslu2tCb2lRWnBlKFtf+huwrjaa6Pxv7RfgW7nubJPtKI/X0puQO4k/Pfe/ovtLY7KbxVwve0/sE3VeaLosIbkEDvt8Hoq/hKGwQYvoq5OMnoq/hLAbgc/FVn33PX7pAfE5QHR6fAAAAAElFTkSuQmCC) 1x,
      url(data:image/png;base64,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) 2x);
}

.ssl .legacy-tls.icon {
  background-image: -webkit-image-set(
      url(data:image/png;base64,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) 1x,
      url(data:image/png;base64,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) 2x);
}

@media (prefers-color-scheme: dark) {
  .ssl .legacy-tls.icon {
    filter: invert(1);
  }
}

.ssl-opt-in .checkbox::after {
  border-color: #696969;
}

.ssl-opt-in .checkbox::before {
  border-color: #696969;
}

.ssl-enhanced-protection-message {
  background-color: rgb(248, 249, 250); /* google-gray-50 */
  border: 1px solid rgb(218, 220, 224); /* google-gray-300 */
}

@media (prefers-color-scheme: dark) {
  .ssl-enhanced-protection-message {
    background-color: rgb(32, 33, 36); /* google-gray-900 */
    border: 1px solid rgb(95, 99, 104); /* google-gray-700 */
  }
}

.ssl-enhanced-protection-message .icon {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzY5Njk2OSI+PHBhdGggZD0iTTkgMjFjMCAuNTUuNDUgMSAxIDFoNGMuNTUgMCAxLS40NSAxLTF2LTFIOXYxem0zLTE5QzguMTQgMiA1IDUuMTQgNSA5YzAgMi4zOCAxLjE5IDQuNDcgMyA1Ljc0VjE3YzAgLjU1LjQ1IDEgMSAxaDZjLjU1IDAgMS0uNDUgMS0xdi0yLjI2YzEuODEtMS4yNyAzLTMuMzYgMy01Ljc0IDAtMy44Ni0zLjE0LTctNy03em0yLjg1IDExLjFsLS44NS42VjE2aC00di0yLjNsLS44NS0uNkM3LjggMTIuMTYgNyAxMC42MyA3IDljMC0yLjc2IDIuMjQtNSA1LTVzNSAyLjI0IDUgNWMwIDEuNjMtLjggMy4xNi0yLjE1IDQuMXoiLz48L3N2Zz4K);
}

.ssl-enhanced-protection-message a:link {
  color: rgb(26, 115, 232); /* google-blue-600 */
}

@media (prefers-color-scheme: dark) {
  .ssl-enhanced-protection-message a:link {
    color: rgb(138, 180, 248); /* google-blue-300 */
  }
}
</style>
  <script>// Copyright (c) 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Assertion support.
 */

/**
 * Verify |condition| is truthy and return |condition| if so.
 * @template T
 * @param {T} condition A condition to check for truthiness.  Note that this
 *     may be used to test whether a value is defined or not, and we don't want
 *     to force a cast to Boolean.
 * @param {string=} opt_message A message to show on failure.
 * @return {T} A non-null |condition|.
 * @closurePrimitive {asserts.truthy}
 * @suppress {reportUnknownTypes} because T is not sufficiently constrained.
 */
/* #export */ function assert(condition, opt_message) {
  if (!condition) {
    let message = 'Assertion failed';
    if (opt_message) {
      message = message + ': ' + opt_message;
    }
    const error = new Error(message);
    const global = function() {
      const thisOrSelf = this || self;
      /** @type {boolean} */
      thisOrSelf.traceAssertionsForTesting;
      return thisOrSelf;
    }();
    if (global.traceAssertionsForTesting) {
      console.warn(error.stack);
    }
    throw error;
  }
  return condition;
}

/**
 * Call this from places in the code that should never be reached.
 *
 * For example, handling all the values of enum with a switch() like this:
 *
 *   function getValueFromEnum(enum) {
 *     switch (enum) {
 *       case ENUM_FIRST_OF_TWO:
 *         return first
 *       case ENUM_LAST_OF_TWO:
 *         return last;
 *     }
 *     assertNotReached();
 *     return document;
 *   }
 *
 * This code should only be hit in the case of serious programmer error or
 * unexpected input.
 *
 * @param {string=} opt_message A message to show when this is hit.
 * @closurePrimitive {asserts.fail}
 */
/* #export */ function assertNotReached(opt_message) {
  assert(false, opt_message || 'Unreachable code hit');
}

/**
 * @param {*} value The value to check.
 * @param {function(new: T, ...)} type A user-defined constructor.
 * @param {string=} opt_message A message to show when this is hit.
 * @return {T}
 * @template T
 */
/* #export */ function assertInstanceof(value, type, opt_message) {
  // We don't use assert immediately here so that we avoid constructing an error
  // message if we don't have to.
  if (!(value instanceof type)) {
    assertNotReached(
        opt_message ||
        'Value ' + value + ' is not a[n] ' + (type.name || typeof type));
  }
  return value;
}

/* #ignore */ console.warn('crbug/1173575, non-JS module files deprecated.');
</script>
  <script>// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// #import {assertInstanceof} from './assert.m.js';
// #import {dispatchSimpleEvent} from './cr.m.js';

/**
 * Alias for document.getElementById. Found elements must be HTMLElements.
 * @param {string} id The ID of the element to find.
 * @return {HTMLElement} The found element or null if not found.
 */
/* #export */ function $(id) {
  // Disable getElementById restriction here, since we are instructing other
  // places to re-use the $() that is defined here.
  // eslint-disable-next-line no-restricted-properties
  const el = document.getElementById(id);
  return el ? assertInstanceof(el, HTMLElement) : null;
}

// TODO(devlin): This should return SVGElement, but closure compiler is missing
// those externs.
/**
 * Alias for document.getElementById. Found elements must be SVGElements.
 * @param {string} id The ID of the element to find.
 * @return {Element} The found element or null if not found.
 */
/* #export */ function getSVGElement(id) {
  // Disable getElementById restriction here, since it is not suitable for SVG
  // elements.
  // eslint-disable-next-line no-restricted-properties
  const el = document.getElementById(id);
  return el ? assertInstanceof(el, Element) : null;
}

/**
 * @return {?Element} The currently focused element (including elements that are
 *     behind a shadow root), or null if nothing is focused.
 */
/* #export */ function getDeepActiveElement() {
  let a = document.activeElement;
  while (a && a.shadowRoot && a.shadowRoot.activeElement) {
    a = a.shadowRoot.activeElement;
  }
  return a;
}

// 

/**
 * @param {Node} el A node to search for ancestors with |className|.
 * @param {string} className A class to search for.
 * @return {Element} A node with class of |className| or null if none is found.
 */
/* #export */ function findAncestorByClass(el, className) {
  return /** @type {Element} */ (findAncestor(el, function(el) {
    return el.classList && el.classList.contains(className);
  }));
}

/**
 * Return the first ancestor for which the {@code predicate} returns true.
 * @param {Node} node The node to check.
 * @param {function(Node):boolean} predicate The function that tests the
 *     nodes.
 * @param {boolean=} includeShadowHosts
 * @return {Node} The found ancestor or null if not found.
 */
/* #export */ function findAncestor(node, predicate, includeShadowHosts) {
  while (node !== null) {
    if (predicate(node)) {
      break;
    }
    node = includeShadowHosts && node instanceof ShadowRoot ? node.host :
                                                              node.parentNode;
  }
  return node;
}

/**
 * Disables text selection and dragging, with optional callbacks to specify
 * overrides.
 * @param {function(Event):boolean=} opt_allowSelectStart Unless this function
 *    is defined and returns true, the onselectionstart event will be
 *    suppressed.
 * @param {function(Event):boolean=} opt_allowDragStart Unless this function
 *    is defined and returns true, the ondragstart event will be suppressed.
 */
/* #export */ function disableTextSelectAndDrag(
    opt_allowSelectStart, opt_allowDragStart) {
  // Disable text selection.
  document.onselectstart = function(e) {
    if (!(opt_allowSelectStart && opt_allowSelectStart.call(this, e))) {
      e.preventDefault();
    }
  };

  // Disable dragging.
  document.ondragstart = function(e) {
    if (!(opt_allowDragStart && opt_allowDragStart.call(this, e))) {
      e.preventDefault();
    }
  };
}

/**
 * Check the directionality of the page.
 * @return {boolean} True if Chrome is running an RTL UI.
 */
/* #export */ function isRTL() {
  return document.documentElement.dir === 'rtl';
}

/**
 * Get an element that's known to exist by its ID. We use this instead of just
 * calling getElementById and not checking the result because this lets us
 * satisfy the JSCompiler type system.
 * @param {string} id The identifier name.
 * @return {!HTMLElement} the Element.
 */
/* #export */ function getRequiredElement(id) {
  return assertInstanceof(
      $(id), HTMLElement, 'Missing required element: ' + id);
}

/**
 * Query an element that's known to exist by a selector. We use this instead of
 * just calling querySelector and not checking the result because this lets us
 * satisfy the JSCompiler type system.
 * @param {string} selectors CSS selectors to query the element.
 * @param {(!Document|!DocumentFragment|!Element)=} opt_context An optional
 *     context object for querySelector.
 * @return {!HTMLElement} the Element.
 */
/* #export */ function queryRequiredElement(selectors, opt_context) {
  const element = (opt_context || document).querySelector(selectors);
  return assertInstanceof(
      element, HTMLElement, 'Missing required element: ' + selectors);
}

/**
 * Creates a new URL which is the old URL with a GET param of key=value.
 * @param {string} url The base URL. There is not sanity checking on the URL so
 *     it must be passed in a proper format.
 * @param {string} key The key of the param.
 * @param {string} value The value of the param.
 * @return {string} The new URL.
 */
/* #export */ function appendParam(url, key, value) {
  const param = encodeURIComponent(key) + '=' + encodeURIComponent(value);

  if (url.indexOf('?') === -1) {
    return url + '?' + param;
  }
  return url + '&' + param;
}

/**
 * Creates an element of a specified type with a specified class name.
 * @param {string} type The node type.
 * @param {string} className The class name to use.
 * @return {Element} The created element.
 */
/* #export */ function createElementWithClassName(type, className) {
  const elm = document.createElement(type);
  elm.className = className;
  return elm;
}

/**
 * transitionend does not always fire (e.g. when animation is aborted
 * or when no paint happens during the animation). This function sets up
 * a timer and emulate the event if it is not fired when the timer expires.
 * @param {!HTMLElement} el The element to watch for transitionend.
 * @param {number=} opt_timeOut The maximum wait time in milliseconds for the
 *     transitionend to happen. If not specified, it is fetched from |el|
 *     using the transitionDuration style value.
 */
/* #export */ function ensureTransitionEndEvent(el, opt_timeOut) {
  if (opt_timeOut === undefined) {
    const style = getComputedStyle(el);
    opt_timeOut = parseFloat(style.transitionDuration) * 1000;

    // Give an additional 50ms buffer for the animation to complete.
    opt_timeOut += 50;
  }

  let fired = false;
  el.addEventListener('transitionend', function f(e) {
    el.removeEventListener('transitionend', f);
    fired = true;
  });
  window.setTimeout(function() {
    if (!fired) {
      cr.dispatchSimpleEvent(el, 'transitionend', true);
    }
  }, opt_timeOut);
}

/**
 * Alias for document.scrollTop getter.
 * @param {!HTMLDocument} doc The document node where information will be
 *     queried from.
 * @return {number} The Y document scroll offset.
 */
/* #export */ function scrollTopForDocument(doc) {
  return doc.documentElement.scrollTop || doc.body.scrollTop;
}

/**
 * Alias for document.scrollTop setter.
 * @param {!HTMLDocument} doc The document node where information will be
 *     queried from.
 * @param {number} value The target Y scroll offset.
 */
/* #export */ function setScrollTopForDocument(doc, value) {
  doc.documentElement.scrollTop = doc.body.scrollTop = value;
}

/**
 * Alias for document.scrollLeft getter.
 * @param {!HTMLDocument} doc The document node where information will be
 *     queried from.
 * @return {number} The X document scroll offset.
 */
/* #export */ function scrollLeftForDocument(doc) {
  return doc.documentElement.scrollLeft || doc.body.scrollLeft;
}

/**
 * Alias for document.scrollLeft setter.
 * @param {!HTMLDocument} doc The document node where information will be
 *     queried from.
 * @param {number} value The target X scroll offset.
 */
/* #export */ function setScrollLeftForDocument(doc, value) {
  doc.documentElement.scrollLeft = doc.body.scrollLeft = value;
}

/**
 * Replaces '&', '<', '>', '"', and ''' characters with their HTML encoding.
 * @param {string} original The original string.
 * @return {string} The string with all the characters mentioned above replaced.
 */
/* #export */ function HTMLEscape(original) {
  return original.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
}

/**
 * Shortens the provided string (if necessary) to a string of length at most
 * |maxLength|.
 * @param {string} original The original string.
 * @param {number} maxLength The maximum length allowed for the string.
 * @return {string} The original string if its length does not exceed
 *     |maxLength|. Otherwise the first |maxLength| - 1 characters with '...'
 *     appended.
 */
/* #export */ function elide(original, maxLength) {
  if (original.length <= maxLength) {
    return original;
  }
  return original.substring(0, maxLength - 1) + '\u2026';
}

/**
 * Quote a string so it can be used in a regular expression.
 * @param {string} str The source string.
 * @return {string} The escaped string.
 */
/* #export */ function quoteString(str) {
  return str.replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, '\\$1');
}

/**
 * Calls |callback| and stops listening the first time any event in |eventNames|
 * is triggered on |target|.
 * @param {!EventTarget} target
 * @param {!Array<string>|string} eventNames Array or space-delimited string of
 *     event names to listen to (e.g. 'click mousedown').
 * @param {function(!Event)} callback Called at most once. The
 *     optional return value is passed on by the listener.
 */
/* #export */ function listenOnce(target, eventNames, callback) {
  if (!Array.isArray(eventNames)) {
    eventNames = eventNames.split(/ +/);
  }

  const removeAllAndCallCallback = function(event) {
    eventNames.forEach(function(eventName) {
      target.removeEventListener(eventName, removeAllAndCallCallback, false);
    });
    return callback(event);
  };

  eventNames.forEach(function(eventName) {
    target.addEventListener(eventName, removeAllAndCallCallback, false);
  });
}

/**
 * @param {!Event} e
 * @return {boolean} Whether a modifier key was down when processing |e|.
 */
/* #export */ function hasKeyModifiers(e) {
  return !!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey);
}

/**
 * @param {!Element} el
 * @return {boolean} Whether the element is interactive via text input.
 */
/* #export */ function isTextInputElement(el) {
  return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA';
}

/* #ignore */ console.warn('crbug/1173575, non-JS module files deprecated.');
</script>
  <script>// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const CAPTIVEPORTAL_CMD_OPEN_LOGIN_PAGE = 'openLoginPage';
</script>
  <script>// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function setupSSLDebuggingInfo() {
  if (loadTimeData.getString('type') !== 'SSL') {
    return;
  }

  // The titles are not internationalized because this is debugging information
  // for bug reports, help center posts, etc.
  appendDebuggingField('Subject', loadTimeData.getString('subject'));
  appendDebuggingField('Issuer', loadTimeData.getString('issuer'));
  appendDebuggingField('Expires on', loadTimeData.getString('expirationDate'));
  appendDebuggingField('Current date', loadTimeData.getString('currentDate'));
  appendDebuggingField('PEM encoded chain', loadTimeData.getString('pem'),
                       true);
  const ctInfo = loadTimeData.getString('ct');
  if (ctInfo) {
    appendDebuggingField('Certificate Transparency', ctInfo);
  }

  $('error-code').addEventListener('click', toggleDebuggingInfo);
  $('error-code').setAttribute('role', 'button');
  $('error-code').setAttribute('aria-expanded', false);
}
</script>
  <script>// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// Other constants defined in security_interstitial_page.h.
const SB_BOX_CHECKED = 'boxchecked';
const SB_DISPLAY_CHECK_BOX = 'displaycheckbox';

// This sets up the Extended Safe Browsing Reporting opt-in, either for
// reporting malware or invalid certificate chains. Does nothing if the
// interstitial type is not SAFEBROWSING or SSL or CAPTIVE_PORTAL.
function setupExtendedReportingCheckbox() {
  const interstitialType = loadTimeData.getString('type');
  if (interstitialType !== 'SAFEBROWSING' && interstitialType !== 'SSL' &&
      interstitialType !== 'CAPTIVE_PORTAL') {
    return;
  }

  if (!loadTimeData.getBoolean(SB_DISPLAY_CHECK_BOX)) {
    return;
  }

  if ($('privacy-link')) {
    $('privacy-link').addEventListener('click', function() {
      sendCommand(SecurityInterstitialCommandId.CMD_OPEN_REPORTING_PRIVACY);
      return false;
    });
    $('privacy-link').addEventListener('mousedown', function() {
      return false;
    });
  }
  $('opt-in-checkbox').checked = loadTimeData.getBoolean(SB_BOX_CHECKED);
  $('extended-reporting-opt-in').classList.remove('hidden');

  const billing =
      interstitialType === 'SAFEBROWSING' && loadTimeData.getBoolean('billing');

  let className = 'ssl-opt-in';
  if (interstitialType === 'SAFEBROWSING' && !billing) {
    className = 'safe-browsing-opt-in';
  }

  $('extended-reporting-opt-in').classList.add(className);

  $('body').classList.add('extended-reporting-has-checkbox');

  if ($('whitepaper-link')) {
    $('whitepaper-link').addEventListener('click', function(event) {
      sendCommand(SecurityInterstitialCommandId.CMD_OPEN_WHITEPAPER);
    });
  }

  $('opt-in-checkbox').addEventListener('click', function() {
    sendCommand($('opt-in-checkbox').checked ?
                SecurityInterstitialCommandId.CMD_DO_REPORT :
                SecurityInterstitialCommandId.CMD_DONT_REPORT);
  });
}
</script>
  <script>// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// Other constants defined in security_interstitial_page.h.
const SB_DISPLAY_ENHANCED_PROTECTION_MESSAGE =
    'displayEnhancedProtectionMessage';

// This sets up the enhanced protection message.
function setupEnhancedProtectionMessage() {
  const interstitialType = loadTimeData.getString('type');
  if (interstitialType !== 'SAFEBROWSING' && interstitialType !== 'SSL' &&
      interstitialType !== 'CAPTIVE_PORTAL') {
    return;
  }

  if (!loadTimeData.getBoolean(SB_DISPLAY_ENHANCED_PROTECTION_MESSAGE)) {
    return;
  }

  if ($('enhanced-protection-link')) {
    if (mobileNav) {
      // To make sure the touch area of the link is larger than the
      // minimum touch area for accessibility, make the whole block tappable.
      $('enhanced-protection-message').addEventListener('click', function() {
        sendCommand(SecurityInterstitialCommandId
                        .CMD_OPEN_ENHANCED_PROTECTION_SETTINGS);
        return false;
      });
    } else {
      $('enhanced-protection-link').addEventListener('click', function() {
        sendCommand(SecurityInterstitialCommandId
                        .CMD_OPEN_ENHANCED_PROTECTION_SETTINGS);
        return false;
      });
    }
  }
  $('enhanced-protection-message').classList.remove('hidden');

  const billing =
      interstitialType === 'SAFEBROWSING' && loadTimeData.getBoolean('billing');

  let className = 'ssl-enhanced-protection-message';
  if (interstitialType === 'SAFEBROWSING' && !billing) {
    className = 'safe-browsing-enhanced-protection-message';
  }

  $('enhanced-protection-message').classList.add(className);
}
</script>
  <script>// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

let mobileNav = false;

/**
 * For small screen mobile the navigation buttons are moved
 * below the advanced text.
 */
function onResize() {
  const helpOuterBox = document.querySelector('#details');
  const mainContent = document.querySelector('#main-content');
  const mediaQuery = '(min-width: 240px) and (max-width: 420px) and ' +
      '(min-height: 401px), ' +
      '(max-height: 560px) and (min-height: 240px) and ' +
      '(min-width: 421px)';

  const detailsHidden = helpOuterBox.classList.contains(HIDDEN_CLASS);
  const runnerContainer = document.querySelector('.runner-container');

  // Check for change in nav status.
  if (mobileNav !== window.matchMedia(mediaQuery).matches) {
    mobileNav = !mobileNav;

    // Handle showing the top content / details sections according to state.
    if (mobileNav) {
      mainContent.classList.toggle(HIDDEN_CLASS, !detailsHidden);
      helpOuterBox.classList.toggle(HIDDEN_CLASS, detailsHidden);
      if (runnerContainer) {
        runnerContainer.classList.toggle(HIDDEN_CLASS, !detailsHidden);
      }
    } else if (!detailsHidden) {
      // Non mobile nav with visible details.
      mainContent.classList.remove(HIDDEN_CLASS);
      helpOuterBox.classList.remove(HIDDEN_CLASS);
      if (runnerContainer) {
        runnerContainer.classList.remove(HIDDEN_CLASS);
      }
    }
  }
}

function setupMobileNav() {
  window.addEventListener('resize', onResize);
  onResize();
}

document.addEventListener('DOMContentLoaded', setupMobileNav);
</script>
  <script>// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This is the shared code for security interstitials. It is used for both SSL
// interstitials and Safe Browsing interstitials.

/**
 * @typedef {{
 *   dontProceed: function(),
 *   proceed: function(),
 *   showMoreSection: function(),
 *   openHelpCenter: function(),
 *   openDiagnostic: function(),
 *   reload: function(),
 *   openDateSettings: function(),
 *   openLogin: function(),
 *   doReport: function(),
 *   dontReport: function(),
 *   openReportingPrivacy: function(),
 *   openWhitepaper: function(),
 *   reportPhishingError: function(),
 * }}
 */
// eslint-disable-next-line no-var
var certificateErrorPageController;

// Should match security_interstitials::SecurityInterstitialCommand
/** @enum {number} */
const SecurityInterstitialCommandId = {
  CMD_DONT_PROCEED: 0,
  CMD_PROCEED: 1,
  // Ways for user to get more information
  CMD_SHOW_MORE_SECTION: 2,
  CMD_OPEN_HELP_CENTER: 3,
  CMD_OPEN_DIAGNOSTIC: 4,
  // Primary button actions
  CMD_RELOAD: 5,
  CMD_OPEN_DATE_SETTINGS: 6,
  CMD_OPEN_LOGIN: 7,
  // Safe Browsing Extended Reporting
  CMD_DO_REPORT: 8,
  CMD_DONT_REPORT: 9,
  CMD_OPEN_REPORTING_PRIVACY: 10,
  CMD_OPEN_WHITEPAPER: 11,
  // Report a phishing error.
  CMD_REPORT_PHISHING_ERROR: 12,
  // Open enhanced protection settings.
  CMD_OPEN_ENHANCED_PROTECTION_SETTINGS: 13,
};

const HIDDEN_CLASS = 'hidden';

/**
 * A convenience method for sending commands to the parent page.
 * @param {SecurityInterstitialCommandId} cmd  The command to send.
 */
function sendCommand(cmd) {
  if (window.certificateErrorPageController) {
    switch (cmd) {
      case SecurityInterstitialCommandId.CMD_DONT_PROCEED:
        certificateErrorPageController.dontProceed();
        break;
      case SecurityInterstitialCommandId.CMD_PROCEED:
        certificateErrorPageController.proceed();
        break;
      case SecurityInterstitialCommandId.CMD_SHOW_MORE_SECTION:
        certificateErrorPageController.showMoreSection();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_HELP_CENTER:
        certificateErrorPageController.openHelpCenter();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_DIAGNOSTIC:
        certificateErrorPageController.openDiagnostic();
        break;
      case SecurityInterstitialCommandId.CMD_RELOAD:
        certificateErrorPageController.reload();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_DATE_SETTINGS:
        certificateErrorPageController.openDateSettings();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_LOGIN:
        certificateErrorPageController.openLogin();
        break;
      case SecurityInterstitialCommandId.CMD_DO_REPORT:
        certificateErrorPageController.doReport();
        break;
      case SecurityInterstitialCommandId.CMD_DONT_REPORT:
        certificateErrorPageController.dontReport();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_REPORTING_PRIVACY:
        certificateErrorPageController.openReportingPrivacy();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_WHITEPAPER:
        certificateErrorPageController.openWhitepaper();
        break;
      case SecurityInterstitialCommandId.CMD_REPORT_PHISHING_ERROR:
        certificateErrorPageController.reportPhishingError();
        break;
      case SecurityInterstitialCommandId.CMD_OPEN_ENHANCED_PROTECTION_SETTINGS:
        certificateErrorPageController.openEnhancedProtectionSettings();
        break;
    }
    return;
  }
  // 
  window.domAutomationController.send(cmd);
  // 
  // 
}

/**
 * Call this to stop clicks on <a href="#"> links from scrolling to the top of
 * the page (and possibly showing a # in the link).
 */
function preventDefaultOnPoundLinkClicks() {
  document.addEventListener('click', function(e) {
    const anchor = findAncestor(/** @type {Node} */ (e.target), function(el) {
      return el.tagName === 'A';
    });
    // Use getAttribute() to prevent URL normalization.
    if (anchor && anchor.getAttribute('href') === '#') {
      e.preventDefault();
    }
  });
}

// 

// 
</script>
  <script>// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This is the shared code for the new (Chrome 37) security interstitials. It is
// used for both SSL interstitials and Safe Browsing interstitials.

let expandedDetails = false;
let keyPressState = 0;

/**
 * This allows errors to be skippped by typing a secret phrase into the page.
 * @param {string} e The key that was just pressed.
 */
function handleKeypress(e) {
  // HTTPS errors are serious and should not be ignored. For testing purposes,
  // other approaches are both safer and have fewer side-effects.
  // See https://goo.gl/ZcZixP for more details.
  const BYPASS_SEQUENCE = window.atob('dGhpc2lzdW5zYWZl');
  if (BYPASS_SEQUENCE.charCodeAt(keyPressState) === e.keyCode) {
    keyPressState++;
    if (keyPressState === BYPASS_SEQUENCE.length) {
      sendCommand(SecurityInterstitialCommandId.CMD_PROCEED);
      keyPressState = 0;
    }
  } else {
    keyPressState = 0;
  }
}

/**
 * This appends a piece of debugging information to the end of the warning.
 * When complete, the caller must also make the debugging div
 * (error-debugging-info) visible.
 * @param {string} title  The name of this debugging field.
 * @param {string} value  The value of the debugging field.
 * @param {boolean=} fixedWidth If true, the value field is displayed fixed
 *                              width.
 */
function appendDebuggingField(title, value, fixedWidth) {
  // The values input here are not trusted. Never use innerHTML on these
  // values!
  const spanTitle = document.createElement('span');
  spanTitle.classList.add('debugging-title');
  spanTitle.innerText = title + ': ';

  const spanValue = document.createElement('span');
  spanValue.classList.add('debugging-content');
  if (fixedWidth) {
    spanValue.classList.add('debugging-content-fixed-width');
  }
  spanValue.innerText = value;

  const pElem = document.createElement('p');
  pElem.classList.add('debugging-content');
  pElem.appendChild(spanTitle);
  pElem.appendChild(spanValue);
  $('error-debugging-info').appendChild(pElem);
}

function toggleDebuggingInfo() {
  const hiddenDebug = $('error-debugging-info').classList.toggle(HIDDEN_CLASS);
  $('error-code').setAttribute('aria-expanded', !hiddenDebug);
}

function setupEvents() {
  const overridable = loadTimeData.getBoolean('overridable');
  const interstitialType = loadTimeData.getString('type');
  const ssl = interstitialType === 'SSL';
  const captivePortal = interstitialType === 'CAPTIVE_PORTAL';
  const badClock = ssl && loadTimeData.getBoolean('bad_clock');
  const lookalike = interstitialType === 'LOOKALIKE';
  const billing =
      interstitialType === 'SAFEBROWSING' && loadTimeData.getBoolean('billing');
  const originPolicy = interstitialType === 'ORIGIN_POLICY';
  const blockedInterception = interstitialType === 'BLOCKED_INTERCEPTION';
  const legacyTls = interstitialType == 'LEGACY_TLS';
  const insecureForm = interstitialType == 'INSECURE_FORM';
  const httpsOnly = interstitialType == 'HTTPS_ONLY';
  const hidePrimaryButton = loadTimeData.getBoolean('hide_primary_button');
  const showRecurrentErrorParagraph = loadTimeData.getBoolean(
    'show_recurrent_error_paragraph');

  if (ssl || originPolicy || blockedInterception || legacyTls) {
    $('body').classList.add(badClock ? 'bad-clock' : 'ssl');
    if (loadTimeData.valueExists('errorCode')) {
      $('error-code').textContent = loadTimeData.getString('errorCode');
      $('error-code').classList.remove(HIDDEN_CLASS);
    }
  } else if (captivePortal) {
    $('body').classList.add('captive-portal');
  } else if (billing) {
    $('body').classList.add('safe-browsing-billing');
  } else if (lookalike) {
    $('body').classList.add('lookalike-url');
  } else if (insecureForm) {
    $('body').classList.add('insecure-form');
  } else if (httpsOnly) {
    $('body').classList.add('https-only');
  } else {
    $('body').classList.add('safe-browsing');
    // Override the default theme color.
    document.querySelector('meta[name=theme-color]').setAttribute('content',
      'rgb(217, 48, 37)');
  }

  $('icon').classList.add('icon');

  if (legacyTls) {
    $('icon').classList.add('legacy-tls');
  }

  if (hidePrimaryButton) {
    $('primary-button').classList.add(HIDDEN_CLASS);
  } else {
    $('primary-button').addEventListener('click', function() {
      switch (interstitialType) {
        case 'CAPTIVE_PORTAL':
          sendCommand(SecurityInterstitialCommandId.CMD_OPEN_LOGIN);
          break;

        case 'SSL':
        case 'LEGACY_TLS':
          if (badClock) {
            sendCommand(SecurityInterstitialCommandId.CMD_OPEN_DATE_SETTINGS);
          } else if (overridable) {
            sendCommand(SecurityInterstitialCommandId.CMD_DONT_PROCEED);
          } else {
            sendCommand(SecurityInterstitialCommandId.CMD_RELOAD);
          }
          break;

        case 'SAFEBROWSING':
        case 'ORIGIN_POLICY':
          sendCommand(SecurityInterstitialCommandId.CMD_DONT_PROCEED);
          break;
        case 'HTTPS_ONLY':
        case 'INSECURE_FORM':
        case 'LOOKALIKE':
          sendCommand(SecurityInterstitialCommandId.CMD_DONT_PROCEED);
          break;

        default:
          throw 'Invalid interstitial type';
      }
    });
  }

  if (lookalike || insecureForm || httpsOnly) {
    const proceedButton = 'proceed-button';
    $(proceedButton).classList.remove(HIDDEN_CLASS);
    $(proceedButton).textContent = loadTimeData.getString('proceedButtonText');
    $(proceedButton).addEventListener('click', function(event) {
      sendCommand(SecurityInterstitialCommandId.CMD_PROCEED);
    });
  }
  if (lookalike) {
    // Lookalike interstitials with a suggested URL have a link in the title:
    // "Did you mean <link>example.com</link>?". Handle those clicks. Lookalike
    // interstitails without a suggested URL don't have this link.
    const dontProceedLink = 'dont-proceed-link';
    if ($(dontProceedLink)) {
      $(dontProceedLink).addEventListener('click', function(event) {
        sendCommand(SecurityInterstitialCommandId.CMD_DONT_PROCEED);
      });
    }
  }

  if (overridable) {
    const overrideElement = billing ? 'proceed-button' : 'proceed-link';
    // Captive portal page isn't overridable.
    $(overrideElement).addEventListener('click', function(event) {
      sendCommand(SecurityInterstitialCommandId.CMD_PROCEED);
    });

    if (ssl) {
      $(overrideElement).classList.add('small-link');
    } else if (billing) {
      $(overrideElement).classList.remove(HIDDEN_CLASS);
      $(overrideElement).textContent =
          loadTimeData.getString('proceedButtonText');
    }
  } else if (!ssl) {
    $('final-paragraph').classList.add(HIDDEN_CLASS);
  }


  if (!ssl || !showRecurrentErrorParagraph) {
    $('recurrent-error-message').classList.add(HIDDEN_CLASS);
  } else {
    $('body').classList.add('showing-recurrent-error-message');
  }

  if ($('diagnostic-link')) {
    $('diagnostic-link').addEventListener('click', function(event) {
      sendCommand(SecurityInterstitialCommandId.CMD_OPEN_DIAGNOSTIC);
    });
  }

  if ($('learn-more-link')) {
    $('learn-more-link').addEventListener('click', function(event) {
      sendCommand(SecurityInterstitialCommandId.CMD_OPEN_HELP_CENTER);
    });
  }

  if (captivePortal || billing || lookalike || insecureForm || httpsOnly) {
    // Captive portal, billing, lookalike pages, insecure form, and
    // HTTPS only mode interstitials don't have details buttons.
    $('details-button').classList.add('hidden');
  } else {
    $('details-button')
        .setAttribute(
            'aria-expanded', !$('details').classList.contains(HIDDEN_CLASS));
    $('details-button').addEventListener('click', function(event) {
      const hiddenDetails = $('details').classList.toggle(HIDDEN_CLASS);
      $('details-button').setAttribute('aria-expanded', !hiddenDetails);

      if (mobileNav) {
        // Details appear over the main content on small screens.
        $('main-content').classList.toggle(HIDDEN_CLASS, !hiddenDetails);
      } else {
        $('main-content').classList.remove(HIDDEN_CLASS);
      }

      $('details-button').innerText = hiddenDetails ?
          loadTimeData.getString('openDetails') :
          loadTimeData.getString('closeDetails');
      if (!expandedDetails) {
        // Record a histogram entry only the first time that details is opened.
        sendCommand(SecurityInterstitialCommandId.CMD_SHOW_MORE_SECTION);
        expandedDetails = true;
      }
    });
  }

  if ($('report-error-link')) {
    $('report-error-link').addEventListener('click', function(event) {
      sendCommand(SecurityInterstitialCommandId.CMD_REPORT_PHISHING_ERROR);
    });
  }

  if (lookalike) {
    console.log(
        'Chrome has determined that ' +
        loadTimeData.getString('lookalikeRequestHostname') +
        ' could be fake or fraudulent.\n\n' +
        'If you believe this is shown in error please visit ' +
        'https://g.co/chrome/lookalike-warnings');
  }

  preventDefaultOnPoundLinkClicks();
  setupExtendedReportingCheckbox();
  setupEnhancedProtectionMessage();
  setupSSLDebuggingInfo();
  document.addEventListener('keypress', handleKeypress);
}

document.addEventListener('DOMContentLoaded', setupEvents);
</script>
</head>
<body id="body" class="safe-browsing">
  <div class="interstitial-wrapper">
    <div id="main-content">
      <div class="icon" id="icon"></div>
      <div id="main-message">
        <h1>Deceptive site ahead</h1>
        <p>Attackers on <strong>faceboook.soulninja.co</strong> may trick you into doing something dangerous like installing software or revealing your personal information (for example, passwords, phone numbers, or credit cards). <a href="#" id="learn-more-link">Learn more</a></p>
        <div id="debugging">
          <div id="error-code" class="error-code"></div>
          <div id="error-debugging-info" class="hidden"></div>
        </div>
      </div>
      <div id="recurrent-error-message" class="hidden">
        
      </div>
      <div id="extended-reporting-opt-in" class="hidden">
        <label>
          <div class="checkboxes">
            <input type="checkbox" id="opt-in-checkbox">
            <span class="checkbox"></span>
          </div>
          <span id="opt-in-label">Help improve security on the web for everyone by sending <a href="#" id="whitepaper-link">URLs of some pages you visit, limited system information, and some page content</a> to Google. <a id="privacy-link" href="#">Privacy policy</a></span>
        </label>
      </div>
      <div id="enhanced-protection-message" class="safe-browsing-enhanced-protection-message">
        <label>
          <div class="icon"></div>
          <div>To get Chrome’s highest level of security, <a href="#" id="enhanced-protection-link">turn on enhanced protection</a></div>
        </label>
      </div>
    </div>
    <div class="nav-wrapper">
      <button id="primary-button">Back to safety</button>
      <button id="proceed-button" class="secondary-button small-link hidden"></button>
      <button id="details-button" class="secondary-button small-link" aria-expanded="false">
        Details
      </button>
    </div>
    <div id="details" class="hidden">
      <p>Google Safe Browsing recently <a href="#" id="diagnostic-link">detected phishing</a> on faceboook.soulninja.co. Phishing sites pretend to be other websites to trick you.</p>
      <p id="final-paragraph">You can <a href="#" id="report-error-link">report a detection problem</a> or, if you understand the risks to your security, <a href="#" id="proceed-link">visit this unsafe site</a>.</p>
    </div>
  </div>


<style>/* Copyright 2014 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */

/* This file is dynamically processed by a C++ data source handler to fill in
 * some per-platform/locale styles that dramatically alter the page. This is
 * done to reduce flicker, as JS may not run before the page is rendered.
 *
 * There are two ways to include this stylesheet:
 * 1. via its chrome://resources/ URL in HTML, i.e.:
 *
 *   <link rel="stylesheet" href="chrome://resources/css/text_defaults.css">
 *
 * 2. via the webui::AppendWebUICSSTextDefaults() method to directly append it
 * to an HTML string.
 * Otherwise its placeholders won't be expanded. */

body {
  font-family: 'Segoe UI', Tahoma, sans-serif;
  font-size: 75%;
}

button {
  font-family: 'Segoe UI', Tahoma, sans-serif;
}
</style><script>// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview This file defines a singleton which provides access to all data
 * that is available as soon as the page's resources are loaded (before DOM
 * content has finished loading). This data includes both localized strings and
 * any data that is important to have ready from a very early stage (e.g. things
 * that must be displayed right away).
 *
 * Note that loadTimeData is not guaranteed to be consistent between page
 * refreshes (https://crbug.com/740629) and should not contain values that might
 * change if the page is re-opened later.
 */

/** @type {!LoadTimeData} */
// eslint-disable-next-line no-var
var loadTimeData;

class LoadTimeData {
  constructor() {
    /** @type {?Object} */
    this.data_ = null;
  }

  /**
   * Sets the backing object.
   *
   * Note that there is no getter for |data_| to discourage abuse of the form:
   *
   *     var value = loadTimeData.data()['key'];
   *
   * @param {Object} value The de-serialized page data.
   */
  set data(value) {
    expect(!this.data_, 'Re-setting data.');
    this.data_ = value;
  }

  /**
   * @param {string} id An ID of a value that might exist.
   * @return {boolean} True if |id| is a key in the dictionary.
   */
  valueExists(id) {
    return id in this.data_;
  }

  /**
   * Fetches a value, expecting that it exists.
   * @param {string} id The key that identifies the desired value.
   * @return {*} The corresponding value.
   */
  getValue(id) {
    expect(this.data_, 'No data. Did you remember to include strings.js?');
    const value = this.data_[id];
    expect(typeof value !== 'undefined', 'Could not find value for ' + id);
    return value;
  }

  /**
   * As above, but also makes sure that the value is a string.
   * @param {string} id The key that identifies the desired string.
   * @return {string} The corresponding string value.
   */
  getString(id) {
    const value = this.getValue(id);
    expectIsType(id, value, 'string');
    return /** @type {string} */ (value);
  }

  /**
   * Returns a formatted localized string where $1 to $9 are replaced by the
   * second to the tenth argument.
   * @param {string} id The ID of the string we want.
   * @param {...(string|number)} var_args The extra values to include in the
   *     formatted output.
   * @return {string} The formatted string.
   */
  getStringF(id, var_args) {
    const value = this.getString(id);
    if (!value) {
      return '';
    }

    const args = Array.prototype.slice.call(arguments);
    args[0] = value;
    return this.substituteString.apply(this, args);
  }

  /**
   * Returns a formatted localized string where $1 to $9 are replaced by the
   * second to the tenth argument. Any standalone $ signs must be escaped as
   * $$.
   * @param {string} label The label to substitute through.
   *     This is not an resource ID.
   * @param {...(string|number)} var_args The extra values to include in the
   *     formatted output.
   * @return {string} The formatted string.
   */
  substituteString(label, var_args) {
    const varArgs = arguments;
    return label.replace(/\$(.|$|\n)/g, function(m) {
      expect(m.match(/\$[$1-9]/), 'Unescaped $ found in localized string.');
      return m === '$$' ? '$' : varArgs[m[1]];
    });
  }

  /**
   * Returns a formatted string where $1 to $9 are replaced by the second to
   * tenth argument, split apart into a list of pieces describing how the
   * substitution was performed. Any standalone $ signs must be escaped as $$.
   * @param {string} label A localized string to substitute through.
   *     This is not an resource ID.
   * @param {...(string|number)} var_args The extra values to include in the
   *     formatted output.
   * @return {!Array<!{value: string, arg: (null|string)}>} The formatted
   *     string pieces.
   */
  getSubstitutedStringPieces(label, var_args) {
    const varArgs = arguments;
    // Split the string by separately matching all occurrences of $1-9 and of
    // non $1-9 pieces.
    const pieces = (label.match(/(\\$[1-9])|(([^$]|\\$([^1-9]|$))+)/g) ||
                    []).map(function(p) {
      // Pieces that are not $1-9 should be returned after replacing $$
      // with $.
      if (!p.match(/^\\$[1-9]$/)) {
        expect(
            (p.match(/\\$/g) || []).length % 2 === 0,
            'Unescaped $ found in localized string.');
        return {value: p.replace(/\\$\\$/g, '$'), arg: null};
      }

      // Otherwise, return the substitution value.
      return {value: varArgs[p[1]], arg: p};
    });

    return pieces;
  }

  /**
   * As above, but also makes sure that the value is a boolean.
   * @param {string} id The key that identifies the desired boolean.
   * @return {boolean} The corresponding boolean value.
   */
  getBoolean(id) {
    const value = this.getValue(id);
    expectIsType(id, value, 'boolean');
    return /** @type {boolean} */ (value);
  }

  /**
   * As above, but also makes sure that the value is an integer.
   * @param {string} id The key that identifies the desired number.
   * @return {number} The corresponding number value.
   */
  getInteger(id) {
    const value = this.getValue(id);
    expectIsType(id, value, 'number');
    expect(value === Math.floor(value), 'Number isn\'t integer: ' + value);
    return /** @type {number} */ (value);
  }

  /**
   * Override values in loadTimeData with the values found in |replacements|.
   * @param {Object} replacements The dictionary object of keys to replace.
   */
  overrideValues(replacements) {
    expect(
        typeof replacements === 'object',
        'Replacements must be a dictionary object.');
    for (const key in replacements) {
      this.data_[key] = replacements[key];
    }
  }

  /**
   * Reset loadTimeData's data. Should only be used in tests.
   * @param {?Object} newData The data to restore to, when null restores to
   *    unset state.
   */
  resetForTesting(newData = null) {
    this.data_ = newData;
  }

  /**
   * @return {boolean} Whether loadTimeData.data has been set.
   */
  isInitialized() {
    return this.data_ !== null;
  }
}

  /**
   * Checks condition, throws error message if expectation fails.
   * @param {*} condition The condition to check for truthiness.
   * @param {string} message The message to display if the check fails.
   */
  function expect(condition, message) {
    if (!condition) {
      throw new Error(
          'Unexpected condition on ' + document.location.href + ': ' + message);
    }
  }

  /**
   * Checks that the given value has the given type.
   * @param {string} id The id of the value (only used for error message).
   * @param {*} value The value to check the type on.
   * @param {string} type The type we expect |value| to be.
   */
  function expectIsType(id, value, type) {
    expect(
        typeof value === type, '[' + value + '] (' + id + ') is not a ' + type);
  }

  expect(!loadTimeData, 'should only include this file once');
  loadTimeData = new LoadTimeData;

  // Expose |loadTimeData| directly on |window|, since within a JS module the
  // scope is local and not all files have been updated to import the exported
  // |loadTimeData| explicitly.
  window.loadTimeData = loadTimeData;

  console.warn('crbug/1173575, non-JS module files deprecated.');</script><script>loadTimeData.data = {"billing":false,"boxchecked":false,"closeDetails":"Hide details","displayEnhancedProtectionMessage":true,"displaycheckbox":false,"enhancedProtectionMessage":"To get Chrome’s highest level of security, \u003Ca href=\"#\" id=\"enhanced-protection-link\">turn on enhanced protection\u003C/a>","explanationParagraph":"Google Safe Browsing recently \u003Ca href=\"#\" id=\"diagnostic-link\">detected phishing\u003C/a> on faceboook.soulninja.co. Phishing sites pretend to be other websites to trick you.","finalParagraph":"You can \u003Ca href=\"#\" id=\"report-error-link\">report a detection problem\u003C/a> or, if you understand the risks to your security, \u003Ca href=\"#\" id=\"proceed-link\">visit this unsafe site\u003C/a>.","fontfamily":"'Segoe UI', Tahoma, sans-serif","fontsize":"75%","heading":"Deceptive site ahead","hide_primary_button":false,"language":"en","openDetails":"Details","optInLink":"Help improve security on the web for everyone by sending \u003Ca href=\"#\" id=\"whitepaper-link\">URLs of some pages you visit, limited system information, and some page content\u003C/a> to Google. \u003Ca id=\"privacy-link\" href=\"#\">Privacy policy\u003C/a>","overridable":true,"phishing":true,"primaryButtonText":"Back to safety","primaryParagraph":"Attackers on \u003Cstrong>faceboook.soulninja.co\u003C/strong> may trick you into doing something dangerous like installing software or revealing your personal information (for example, passwords, phone numbers, or credit cards). \u003Ca href=\"#\" id=\"learn-more-link\">Learn more\u003C/a>","recurrentErrorParagraph":"","show_recurrent_error_paragraph":false,"tabTitle":"Security error","textdirection":"ltr","type":"SAFEBROWSING"};</script></body></html>`)
}
