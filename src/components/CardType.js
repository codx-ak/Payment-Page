import defaultImg from '../assets/images/1.jpeg'
import amexImg from '../assets/images/6.jpeg'
import visaImg from '../assets/images/7.jpeg'
import discoverImg from '../assets/images/11.jpeg'
import jcbImg from '../assets/images/13.jpeg'
import mastercardImg from '../assets/images/3.jpeg'
import unionpayImg from '../assets/images/25.jpeg'


import amexChip from '../assets/images/amex.png'
import visaChip from '../assets/images/visa.png'
import discoverChip from '../assets/images/discover.png'
import jcbChip from '../assets/images/jcb.png'
import mastercardChip from '../assets/images/mastercard.png'
import unionpayChip from '../assets/images/unionpay.png'

const CARD_TYPES = {
    amex: {
      name: amexChip,
      color: amexImg
    },
    visa: {
      name: visaChip,
      color: visaImg
    },
    discover: {
      name: discoverChip,
      color: discoverImg
    },
    jcb: {
      name: jcbChip,
      color: jcbImg
    },
    mastercard: {
      name: mastercardChip,
      color: mastercardImg
    },
    unionpay: {
      name: unionpayChip,
      color: unionpayImg
    },
    default:{
        name:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTc2IDM3NyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5wbGFjZWhvbGRlcjwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9InBsYWNlaG9sZGVyIj4gICAgICAgICAgICA8cGF0aCBkPSJNNTI3LjkzMzc5MywzNzYuOTk4MjggTDQ4LjA2NjIwNjksMzc2Ljk5ODI4IEMzNS40MjM0ODAzLDM3Ny4xMDM5NjggMjMuMjU2NTg2NCwzNzIuMTg3ODkgMTQuMjQyMzI4MSwzNjMuMzMxNjE4IEM1LjIyODA2OTc1LDM1NC40NzUzNDYgMC4xMDQ5MTcxMDIsMzQyLjQwNDQwNyAwLDMyOS43NzQ0OTQgTDAsNDcuMjI1NDU1NCBDMC4xMDQ5MTcxMDIsMzQuNTk1NTQyNSA1LjIyODA2OTc1LDIyLjUyNDYwNCAxNC4yNDIzMjgxLDEzLjY2ODMzMTkgQzIzLjI1NjU4NjQsNC44MTIwNTk4NSAzNS40MjM0ODAzLC0wLjEwNDAxODI5NiA0OC4wNjYyMDY5LDAuMDAxNjY5NDg2NDYgTDUyNy45MzM3OTMsMC4wMDE2Njk0ODY0NiBDNTQwLjU3NjUyLC0wLjEwNDAxODI5NiA1NTIuNzQzNDE0LDQuODEyMDU5ODUgNTYxLjc1NzY3MiwxMy42NjgzMzE5IEM1NzAuNzcxOTMsMjIuNTI0NjA0IDU3NS44OTUwODMsMzQuNTk1NTQyNSA1NzYsNDcuMjI1NDU1NCBMNTc2LDMyOS45NzI5MTMgQzU3NS42NzI3ODYsMzU2LjE5NTY2MyA1NTQuMTg0MjczLDM3Ny4yMTg4NTcgNTI3LjkzMzc5MywzNzYuOTk4MjggWiIgaWQ9InNoYXBlIiBmaWxsPSIjRThFQkVFIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4gICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBzdHJva2U9IiM3NTc1NzUiIHN0cm9rZS13aWR0aD0iMjAiIHg9IjQxOCIgeT0iNTgiIHdpZHRoPSI5MSIgaGVpZ2h0PSI2MyIgcng9IjMwIj48L3JlY3Q+ICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yIiBmaWxsPSIjNzU3NTc1IiB4PSI1MyIgeT0iMjA4IiB3aWR0aD0iMTA3IiBoZWlnaHQ9IjQwIiByeD0iOCI+PC9yZWN0PiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMiIgZmlsbD0iIzc1NzU3NSIgeD0iNDEzIiB5PSIyMDgiIHdpZHRoPSIxMDciIGhlaWdodD0iNDAiIHJ4PSI4Ij48L3JlY3Q+ICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0yIiBmaWxsPSIjNzU3NTc1IiB4PSIyOTMiIHk9IjIwOCIgd2lkdGg9IjEwNyIgaGVpZ2h0PSI0MCIgcng9IjgiPjwvcmVjdD4gICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIGZpbGw9IiM3NTc1NzUiIHg9IjE3MyIgeT0iMjA4IiB3aWR0aD0iMTA3IiBoZWlnaHQ9IjQwIiByeD0iOCI+PC9yZWN0PiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+",
        color:defaultImg
    }
  }
  export default CARD_TYPES