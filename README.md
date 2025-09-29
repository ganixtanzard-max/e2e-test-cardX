# e2e-test-cardX

Cypress tests for demo (UI and API)

## Requirements
- Node.js = 24.9.0
- Git

## Setup
```bash
git clone https://github.com/ganixtanzard-max/e2e-test-cardX.git
cd e2e-test-cardX
npm ci
npm run verify

```
Run Tests
(Cypress GUI):
```bash
- npm run cy:open 
```
- เลือก E2E Testing
- เลือก chrome
- กด Start E2E Testing Chrome
  - google (จะเป็นตัว UI ที่จะค้นหาข้อมูล ผมลองหน่วงเวลาแล้วแต่ยังติด robot อยู่ครับเลยหน่วงเวลาให้ manual มือเองไปก่อน )
  - university (จะเป็นตัว API มีอยู๋ 2 เคสที่รันครับ เคสแรกจะโชว์ชื่อมหาลัยที่อยู่ในไทย เคสที่สองจะเป็นที่อยู่ในไทย และมีชื่อ Asia ครับ)

(CI mode):
```bash
npm run cy:run
