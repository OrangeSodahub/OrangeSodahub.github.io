# ADD WEBSITE STATISTICS


Choose anyone you prefer:

## Busuanzi

Busuanzi is a plug-in which is designed by a technologist for the blog-statistic usage exclusively---individually, not officially. Anyway, its advantages are: simplicity, efficiency, convenience, minimalism and dependability.

Here are the steps:

### Install the scirpt(Required)

To use busuanzi you must input the **busuanzi.js** to your site. Current version:

```
<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js">
</script>
```

You can copy that and paste it to anywhere in the root of your site. Randomly **footer.html** or **header.html** are absolutely OK. 

### Configure the lable(Optional)

While the script is successfully input then your sitepages are able to count. Now what you should do is to show the result.

Simply copy the corresponding HTML tag to the location on your site where you display the number. There are several cases depending on what you want to display.

#### Display total site's visits

To display total site visits copy the following codes to the location where you want to display and there two methods of counting.

1. **pv**: A single user clicks on n passages in a row and records n visits.

   ```
   <span id="busuanzi_container_site_pv">
       本站总访问量<span id="busuanzi_value_site_pv"></span>次
   </span>
   ```

2. **uv**: A single user clicks on n passages in a row and records only one visit.

   ```
   <span id="busuanzi_container_site_uv">
     本站访客数<span id="busuanzi_value_site_uv"></span>人次
   </span>
   ```

#### Display single page's visits

It uses the pv method.

```
<span id="busuanzi_container_page_pv">
  本文总阅读量<span id="busuanzi_value_page_pv"></span>次
</span>
```

## UMeng

## BaiduAnalysis
