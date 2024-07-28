function loco(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {  
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco();

var clutter = "";

document.querySelector("#page2>h2").textContent.split(" ").forEach(function(dets){
  clutter += `<span> ${dets} </span>`
  document.querySelector("#page2>h2").innerHTML = clutter;
})

gsap.to("#page2>h2>span",{
  ScrollTrigger:{
    trigger:`#page2>h2>span`,
    start:`top bottom`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:5,
    //markers:true
  },
  stagger:.2,
  color:`#fff`
})



function canvas(){
  const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
imgs/can-jpg/house-frame-001.jpg
imgs/can-jpg/house-frame-002.jpg
imgs/can-jpg/house-frame-003.jpg
imgs/can-jpg/house-frame-004.jpg
imgs/can-jpg/house-frame-005.jpg
imgs/can-jpg/house-frame-006.jpg
imgs/can-jpg/house-frame-007.jpg
imgs/can-jpg/house-frame-008.jpg
imgs/can-jpg/house-frame-009.jpg
imgs/can-jpg/house-frame-010.jpg
imgs/can-jpg/house-frame-011.jpg
imgs/can-jpg/house-frame-012.jpg
imgs/can-jpg/house-frame-013.jpg
imgs/can-jpg/house-frame-014.jpg
imgs/can-jpg/house-frame-015.jpg
imgs/can-jpg/house-frame-016.jpg
imgs/can-jpg/house-frame-017.jpg
imgs/can-jpg/house-frame-018.jpg
imgs/can-jpg/house-frame-019.jpg
imgs/can-jpg/house-frame-020.jpg
imgs/can-jpg/house-frame-021.jpg
imgs/can-jpg/house-frame-022.jpg
imgs/can-jpg/house-frame-023.jpg
imgs/can-jpg/house-frame-024.jpg
imgs/can-jpg/house-frame-025.jpg
imgs/can-jpg/house-frame-026.jpg
imgs/can-jpg/house-frame-027.jpg
imgs/can-jpg/house-frame-028.jpg
imgs/can-jpg/house-frame-029.jpg
imgs/can-jpg/house-frame-030.jpg
imgs/can-jpg/house-frame-031.jpg
imgs/can-jpg/house-frame-032.jpg
imgs/can-jpg/house-frame-033.jpg
imgs/can-jpg/house-frame-034.jpg
imgs/can-jpg/house-frame-035.jpg
imgs/can-jpg/house-frame-036.jpg
imgs/can-jpg/house-frame-037.jpg
imgs/can-jpg/house-frame-038.jpg
imgs/can-jpg/house-frame-039.jpg
imgs/can-jpg/house-frame-040.jpg
imgs/can-jpg/house-frame-041.jpg
imgs/can-jpg/house-frame-042.jpg
imgs/can-jpg/house-frame-043.jpg
imgs/can-jpg/house-frame-044.jpg
imgs/can-jpg/house-frame-045.jpg
imgs/can-jpg/house-frame-046.jpg
imgs/can-jpg/house-frame-047.jpg
imgs/can-jpg/house-frame-048.jpg
imgs/can-jpg/house-frame-049.jpg
imgs/can-jpg/house-frame-050.jpg
imgs/can-jpg/house-frame-051.jpg
imgs/can-jpg/house-frame-052.jpg
imgs/can-jpg/house-frame-053.jpg
imgs/can-jpg/house-frame-054.jpg
imgs/can-jpg/house-frame-055.jpg
imgs/can-jpg/house-frame-056.jpg
imgs/can-jpg/house-frame-057.jpg
imgs/can-jpg/house-frame-058.jpg
imgs/can-jpg/house-frame-059.jpg
imgs/can-jpg/house-frame-060.jpg
imgs/can-jpg/house-frame-061.jpg
imgs/can-jpg/house-frame-062.jpg
imgs/can-jpg/house-frame-063.jpg
imgs/can-jpg/house-frame-064.jpg
imgs/can-jpg/house-frame-065.jpg
imgs/can-jpg/house-frame-066.jpg
imgs/can-jpg/house-frame-067.jpg
imgs/can-jpg/house-frame-068.jpg
imgs/can-jpg/house-frame-069.jpg
imgs/can-jpg/house-frame-070.jpg
imgs/can-jpg/house-frame-071.jpg
imgs/can-jpg/house-frame-072.jpg
imgs/can-jpg/house-frame-073.jpg
imgs/can-jpg/house-frame-074.jpg
imgs/can-jpg/house-frame-075.jpg
imgs/can-jpg/house-frame-076.jpg
imgs/can-jpg/house-frame-077.jpg
imgs/can-jpg/house-frame-078.jpg
imgs/can-jpg/house-frame-079.jpg
imgs/can-jpg/house-frame-080.jpg
imgs/can-jpg/house-frame-081.jpg
imgs/can-jpg/house-frame-082.jpg
imgs/can-jpg/house-frame-083.jpg
imgs/can-jpg/house-frame-084.jpg
imgs/can-jpg/house-frame-085.jpg
imgs/can-jpg/house-frame-086.jpg
imgs/can-jpg/house-frame-087.jpg
imgs/can-jpg/house-frame-088.jpg
imgs/can-jpg/house-frame-089.jpg
imgs/can-jpg/house-frame-090.jpg
imgs/can-jpg/house-frame-091.jpg
imgs/can-jpg/house-frame-092.jpg
imgs/can-jpg/house-frame-093.jpg
imgs/can-jpg/house-frame-094.jpg
imgs/can-jpg/house-frame-095.jpg
imgs/can-jpg/house-frame-096.jpg
imgs/can-jpg/house-frame-097.jpg
imgs/can-jpg/house-frame-098.jpg
imgs/can-jpg/house-frame-099.jpg
imgs/can-jpg/house-frame-100.jpg
imgs/can-jpg/house-frame-101.jpg
imgs/can-jpg/house-frame-102.jpg
imgs/can-jpg/house-frame-103.jpg
imgs/can-jpg/house-frame-104.jpg
imgs/can-jpg/house-frame-105.jpg
imgs/can-jpg/house-frame-106.jpg
imgs/can-jpg/house-frame-107.jpg
imgs/can-jpg/house-frame-108.jpg
imgs/can-jpg/house-frame-109.jpg
imgs/can-jpg/house-frame-110.jpg
imgs/can-jpg/house-frame-111.jpg
imgs/can-jpg/house-frame-112.jpg
imgs/can-jpg/house-frame-113.jpg
imgs/can-jpg/house-frame-114.jpg
imgs/can-jpg/house-frame-115.jpg
imgs/can-jpg/house-frame-116.jpg
imgs/can-jpg/house-frame-117.jpg
imgs/can-jpg/house-frame-118.jpg
imgs/can-jpg/house-frame-119.jpg
imgs/can-jpg/house-frame-120.jpg
imgs/can-jpg/house-frame-121.jpg
imgs/can-jpg/house-frame-122.jpg
imgs/can-jpg/house-frame-123.jpg
imgs/can-jpg/house-frame-124.jpg
imgs/can-jpg/house-frame-125.jpg
imgs/can-jpg/house-frame-126.jpg
imgs/can-jpg/house-frame-127.jpg
imgs/can-jpg/house-frame-128.jpg
imgs/can-jpg/house-frame-129.jpg
imgs/can-jpg/house-frame-130.jpg
imgs/can-jpg/house-frame-131.jpg
imgs/can-jpg/house-frame-132.jpg
imgs/can-jpg/house-frame-133.jpg
imgs/can-jpg/house-frame-134.jpg
imgs/can-jpg/house-frame-135.jpg
imgs/can-jpg/house-frame-136.jpg
imgs/can-jpg/house-frame-137.jpg
imgs/can-jpg/house-frame-138.jpg
imgs/can-jpg/house-frame-139.jpg
imgs/can-jpg/house-frame-140.jpg
imgs/can-jpg/house-frame-141.jpg
imgs/can-jpg/house-frame-142.jpg
imgs/can-jpg/house-frame-143.jpg
imgs/can-jpg/house-frame-144.jpg
imgs/can-jpg/house-frame-145.jpg
imgs/can-jpg/house-frame-146.jpg
imgs/can-jpg/house-frame-147.jpg
imgs/can-jpg/house-frame-148.jpg
imgs/can-jpg/house-frame-149.jpg
imgs/can-jpg/house-frame-150.jpg
imgs/can-jpg/house-frame-151.jpg
imgs/can-jpg/house-frame-152.jpg
imgs/can-jpg/house-frame-153.jpg
imgs/can-jpg/house-frame-154.jpg
imgs/can-jpg/house-frame-155.jpg
imgs/can-jpg/house-frame-156.jpg
imgs/can-jpg/house-frame-157.jpg
imgs/can-jpg/house-frame-158.jpg
imgs/can-jpg/house-frame-159.jpg
imgs/can-jpg/house-frame-160.jpg
imgs/can-jpg/house-frame-161.jpg
imgs/can-jpg/house-frame-162.jpg
imgs/can-jpg/house-frame-163.jpg
imgs/can-jpg/house-frame-164.jpg
imgs/can-jpg/house-frame-165.jpg
imgs/can-jpg/house-frame-166.jpg
imgs/can-jpg/house-frame-167.jpg
imgs/can-jpg/house-frame-168.jpg
imgs/can-jpg/house-frame-169.jpg
imgs/can-jpg/house-frame-170.jpg
imgs/can-jpg/house-frame-171.jpg
imgs/can-jpg/house-frame-172.jpg
imgs/can-jpg/house-frame-173.jpg
imgs/can-jpg/house-frame-174.jpg
imgs/can-jpg/house-frame-175.jpg
imgs/can-jpg/house-frame-176.jpg
imgs/can-jpg/house-frame-177.jpg
imgs/can-jpg/house-frame-178.jpg
imgs/can-jpg/house-frame-179.jpg
imgs/can-jpg/house-frame-180.jpg
imgs/can-jpg/house-frame-181.jpg
imgs/can-jpg/house-frame-182.jpg
imgs/can-jpg/house-frame-183.jpg
imgs/can-jpg/house-frame-184.jpg
imgs/can-jpg/house-frame-185.jpg
imgs/can-jpg/house-frame-186.jpg
imgs/can-jpg/house-frame-187.jpg
imgs/can-jpg/house-frame-188.jpg
imgs/can-jpg/house-frame-189.jpg
imgs/can-jpg/house-frame-190.jpg
imgs/can-jpg/house-frame-191.jpg
imgs/can-jpg/house-frame-192.jpg
imgs/can-jpg/house-frame-193.jpg
imgs/can-jpg/house-frame-194.jpg
imgs/can-jpg/house-frame-195.jpg
imgs/can-jpg/house-frame-196.jpg
imgs/can-jpg/house-frame-197.jpg
imgs/can-jpg/house-frame-198.jpg
imgs/can-jpg/house-frame-199.jpg
imgs/can-jpg/house-frame-200.jpg
`;
return data.split("\n")[index];
}

const frameCount = 200;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page3`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page3",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas()

