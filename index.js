const PORT = 8000;

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();


const URL = "https://loftman.co.jp/shop/e/enew-arrival-item/?brand=MEN&filtercode4=";

const data = [];
axios(URL).then((response) => {
  const htmlParser = response.data;
  // console.log(htmlPArser);

  const $ = cheerio.load(htmlParser);

  $(".block-thumbnail-t--goods-description", htmlParser).each(function() {
    const title = $(this).find(".block-thumbnail-t--goods-name").text();
    const price = $(this).find(".price").text();

    data.push({title, price});
    console.log(data);
  })
}).catch((error) => console.log(error));



app.listen(PORT, console.log("surver running"));