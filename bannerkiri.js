const body = document.body
const div = document.createElement("div")

div.innerHTML = `
<span class="left-banner-hideshow" id="left_banner1" style="top:210px; left:1px; position:fixed; z-index:99; overflow:hidden; clear:right;">
<a onclick="document.getElementById('left_banner1').style.display = 'none';" style="cursor:pointer; float:right;">
  <button style="z-index: 999920;position: absolute;float: left;top: 0px;right: 0px;width: 30px;cursor: pointer;height: 30px;background-repeat: no-repeat;background-size: cover;background-color: #fdd736; color:#202020;" alt="close" title="Close Ads">X </button>
</a>
<a href="" title="link title">
  <img style="width:200px;height:auto;" src="https://1.bp.blogspot.com/-OpjUMjNcak0/YOVfJcLmhWI/AAAAAAAAGkY/oMNcfREZQ3YskPDz2fq2DcGIQe1ax0e1wCLcBGAsYHQ/s0/SITUS-JUDI-ONLINE-DEPOSIT-PULSA.gif" alt="Image Alt">
</a>
</span> <span class="left-banner-hideshow" id="left_banner2" style="top:440px; left:1px; position:fixed; z-index:100; overflow:hidden; clear:right;">
<a onclick="document.getElementById('left_banner2').style.display = 'none';" style="cursor:pointer; float:right;">
  <button style="z-index: 999920;position: absolute;float: left;top: 0px;right: 0px;width: 30px;cursor: pointer;height: 30px;background-repeat: no-repeat;background-size: cover;background-color: #fdd736; color:#202020;" alt="close" title="Close Ads">X </button>
</a>
<a href="" title="link title">
  <img style="width:200px;height:auto;" src="https://128.199.113.179/wp-content/uploads/2020/02/s128-togel-banner.gif" alt="Image Alt">
</a>
</span>
`

body.append(div)
