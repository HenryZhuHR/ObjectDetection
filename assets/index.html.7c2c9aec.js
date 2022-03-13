import{r as o,o as r,c as l,a as e,b as t,F as i,e as n,d as a}from"./app.797b6d26.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";var p="/deep-detection/assets/image-1.ece1fbec.png";const d={},m=e("h2",{id:"yolov5-lite\u4F7F\u7528\u8BF4\u660E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#yolov5-lite\u4F7F\u7528\u8BF4\u660E","aria-hidden":"true"},"#"),n(" YOLOv5-Lite\u4F7F\u7528\u8BF4\u660E")],-1),b={id:"\u4EC0\u4E48\u662Fyolov5-lite",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#\u4EC0\u4E48\u662Fyolov5-lite","aria-hidden":"true"},"#",-1),h=n(" \u4EC0\u4E48\u662F"),g={href:"https://github.com/ppogg/YOLOv5-Lite",target:"_blank",rel:"noopener noreferrer"},_=n("YOLOv5-Lite"),v=n("\uFF1F"),x=a(`<p>YOLOv5-Lite\u662F\u5728YOLOv5\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u4E00\u7CFB\u5217\u6D88\u878D\u5B9E\u9A8C\u5F97\u5230\u7684\u66F4\u8F7B(Flops\u66F4\u5C0F\uFF0C\u5185\u5B58\u66F4\u4F4E\uFF0C\u53C2\u6570\u66F4\u5C11)\uFF0C\u901F\u5EA6\u66F4\u5FEB(\u589E\u52A0shuffle channel, yolov5 head for channel reduce)\u7684\u76EE\u6807\u68C0\u6D4B\u6A21\u578B\u3002\u5F53\u4F7F\u7528320\xD7320\u8F93\u5165\u5E27\u65F6\uFF0C\u5728Raspberry Pi 4B\u4E0A\u53EF\u4EE5\u63A8\u65AD\u51FA\u81F3\u5C1110+ FPS)\uFF0C\u5E76\u4E14\u66F4\u5BB9\u6613\u90E8\u7F72(\u5220\u9664Focus\u5C42\u548C4\u4E2A\u5207\u7247\u64CD\u4F5C\uFF0C\u5C06\u6A21\u578B\u91CF\u5316\u7CBE\u5EA6\u964D\u4F4E\u5230\u4E00\u4E2A\u53EF\u63A5\u53D7\u7684\u8303\u56F4)\u3002</p><h3 id="\u5FEB\u901F\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4F7F\u7528" aria-hidden="true">#</a> \u5FEB\u901F\u4F7F\u7528</h3><p><strong>1.\u5B89\u88C5YOLOv5-Lite</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ git clone https://github.com/ppogg/YOLOv5-Lite
$ cd YOLOv5-Lite
$ pip install -r requirements.txt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>2.\u9A8C\u8BC1\u5B89\u88C5\u73AF\u5883</strong></p>`,5),O=n("\u5728"),L={href:"https://github.com/ppogg/YOLOv5-Lite/releases",target:"_blank",rel:"noopener noreferrer"},y=n("latest YOLOv5-Lite release"),f=n(" \u4E2D\u4E0B\u8F7D\u5BF9\u5E94\u6743\u91CD\u6587\u4EF6\uFF0C\u8FD0\u884C\u4EE5\u4E0B\u6307\u4EE4\u8C03\u7528demo\u6587\u4EF6,\u6587\u4EF6\u5C06\u81EA\u52A8\u4FDD\u5B58\u5728 "),Y=e("code",null,"runs/detect",-1),I=n("\u4E2D"),k=a(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ python detect.py --source 0  # webcam
                            file.jpg  # image 
                            file.mp4  # video
                            path/  # directory
                            path/*.jpg  # glob
                            &#39;https://youtu.be/NUsoVlDFqZg&#39;  # YouTube
                            &#39;rtsp://example.com/media.mp4&#39;  # RTSP, RTMP, HTTP stream
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u6570\u636E\u96C6\u8BAD\u7EC3" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u96C6\u8BAD\u7EC3" aria-hidden="true">#</a> \u6570\u636E\u96C6\u8BAD\u7EC3</h3>`,2),N=e("strong",null,"1.\u6807\u6CE8",-1),V=n(":\u4F7F\u7528"),F={href:"https://github.com/tzutalin/labelImg",target:"_blank",rel:"noopener noreferrer"},P=n("labelImg"),T=n(" \u5BF9\u6570\u636E\u96C6\u8FDB\u884C\u6807\u6CE8"),j=a(`<p><strong>2.\u6570\u636E\u96C6\u7ED3\u6784\u8F6C\u6362</strong>:\u6570\u636E\u96C6\u7ED3\u6784\u4E0EYOLOv5\u4E00\u81F4\uFF0C\u7ED3\u6784\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2514\u2500\u2500 dataset-custom  # \u6570\u636E\u96C6\u6587\u4EF6\u5939
    \u251C\u2500\u2500 src         # \u539F\u59CB\u6570\u636E\uFF0C\u6309\u7167\u7C7B\u522B\u8FDB\u884C\u5F52\u6863
    \u251C\u2500\u2500 labeled     # \u538B\u7F29\u3001\u91CD\u547D\u540D\u540E\u7684\u6587\u4EF6\uFF0C\u5728\u8FD9\u91CC\u8FDB\u884C\u6807\u6CE8
    \u2514\u2500\u2500 coco        # coco \u6570\u636E\u96C6\uFF0C\u7528\u4E8E\u8BAD\u7EC3
        \u251C\u2500\u2500 images
        \u2502   \u251C\u2500\u2500 train2017
        \u2502   \u2514\u2500\u2500 val2017
        \u2514\u2500\u2500 labels   
            \u251C\u2500\u2500 train2017
            \u2514\u2500\u2500 val2017
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>3.\u4FEE\u6539\u6570\u636E\u96C6\u7C7B\u522B\u4E2A\u6570\u4E0E\u540D\u79F0\u4E0E\u4FDD\u5B58\u8DEF\u5F84</strong>:\u5728\u6587\u4EF6\u8DEF\u5F84<code>YOLOv5-Lite_DIR/data/cocol.yaml</code>\u4E2D\uFF0C\u5C06<code>names</code>\u4FEE\u6539\u4E3A\u81EA\u5DF1\u6570\u636E\u96C6\u6240\u8981\u8BC6\u522B\u7684\u540D\u79F0\uFF0C\u5C06<code>nc</code>\u4FEE\u6539\u4E3A\u81EA\u5DF1\u6570\u636E\u96C6\u6240\u8981\u8BC6\u522B\u7684\u7C7B\u522B\u4E2A\u6570,\u5C06<code>train</code>,<code>val</code>,<code>test</code>\u4FEE\u6539\u4E3A\u6570\u636E\u96C6\u5BF9\u5E94\u4F4D\u7F6E</p><p><img src="`+p+`" alt="image-20220311185943426"></p><p><strong>4.\u8BAD\u7EC3\u6570\u636E\u96C6</strong></p><p>\u5728<code>/YOLOv5-Lite</code>\u4E0B\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ python train.py --data coco.yaml --cfg v5lite-s.yaml --weights v5lite-s.pt --batch-size 128
                                         v5lite-c.yaml           v5lite-c.pt               96
                                         v5lite-g.yaml           v5lite-g.pt               64
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8BAD\u7EC3\u6240\u5F97\u7ED3\u679C\u4FDD\u5B58\u5728<code>YOLOv5-Lite/runs/train/exp</code>\u4E2D</p><h3 id="\u8BAD\u7EC3\u6743\u91CD\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u8BAD\u7EC3\u6743\u91CD\u8F6C\u6362" aria-hidden="true">#</a> \u8BAD\u7EC3\u6743\u91CD\u8F6C\u6362</h3><p>\u6A21\u578B\u8BAD\u7EC3\u5B8C\u6210\u540E\u9700\u8981\u5C06<code>.pt</code>\u6587\u4EF6\u8F6C\u6362\u4E3AOpenVINO\u6240\u9700\u8981\u7684<code>.xml</code>\u4E0E<code>.bin</code>\u6587\u4EF6\uFF0C\u8F6C\u5316\u6D41\u7A0B\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  .pt-&gt; .onnx  # \u901A\u8FC7\u6267\u884C\u6587\u4EF6 /models/export.py
            \u2514\u2500&gt; .onnx -&gt; .xml/.bin  #\u901A\u8FC7\u6267\u884C\u6587\u4EF6\uFF1A/opt/intel/openvino_DIR/deployment_tools/model_optimizer/mo_onnx.py
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>1.pth2onnx</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>python3 models/export.py --weights weights/v5lite-c.pt --img 640 --batch 1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>2.onnx2xml</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>python3 /opt/intel/openvino_2021/deployment_tools/model_optimizer/mo_onnx.py --input_model best.onnx -s 255 --data_type FP16  --reverse_input_channels --output Conv_454,Conv_457,Conv_460  ##\u8F93\u51FA\u5E94\u901A\u8FC7netorn\u7B49\u8F6F\u4EF6\u9009\u53D6
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u9A8C\u8BC1\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1\u6A21\u578B" aria-hidden="true">#</a> \u9A8C\u8BC1\u6A21\u578B</h3><p><code>YOLOv5-Lite/demo/OpenVINO</code>\u4E2D\u6709c++\u548Cpython\u4E24\u5957\u4F7F\u7528OpenVINO\u90E8\u7F72YOLOX\u7684\u4EE3\u7801\uFF0C\u6267\u884C\u76F8\u5E94\u6307\u4EE4\u9A8C\u8BC1\u8BAD\u7EC3\u7ED3\u679C(\u4EE5python\u4E3A\u4F8B)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd ~/YOLOv5-Lite/python_demo/openvino
python3 openvino.py -m best.xml -i bike.jpg
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,18);function R($,w){const s=o("ExternalLinkIcon");return r(),l(i,null,[m,e("h3",b,[u,h,e("a",g,[_,t(s)]),v]),x,e("p",null,[O,e("a",L,[y,t(s)]),f,Y,I]),k,e("p",null,[N,V,e("a",F,[P,t(s)]),T]),j],64)}var C=c(d,[["render",R]]);export{C as default};
