let x = '400',
  y = '400',
  z = '250';
let vm = new Vue({
  el: '#app',
  data: {
    size: {
      x: x,
      y: y,
      z: z
    },
    styleLeft: {
      backgroundImage: `url(img/f1.png)`,
      transform: '',
      width: '',
      height: ''
    },
    styleRight: {
      backgroundImage: `url(img/f2.png)`,
      transform: ``,
      width: '',
      height: ''
    },
    styleTop: {
      backgroundImage: `url(img/f3.png)`,
      transform: ``,
      width: '',
      height: ''
    },
    styleBottom: {
      backgroundImage: `url(img/f4.png)`,
      transform: ``,
      width: '',
      height: ''

    },
    stylePre: {
      backgroundImage: `url(img/f5.png)`,
      transform: ``,
      width: '',
      height: ''
    },
    styleBack: {
      backgroundImage: `url(img/f6.png)`,
      transform: ``,
      width: '',
      height: ''
    }

  },
  computed: {
    preZ() {
      return Math.floor(this.size.y / 2) + 'px'
    },
    backZ() {
      return Math.floor(this.size.y / 2) + 'px'
    },
    leftZ() {
      return Math.floor(this.size.y / 2) + 'px'
    },
    rightZ() {
      return Math.floor(this.size.x - this.size.y / 2) + 'px'
    },
    topZ() {
      return Math.floor(this.size.y / 2) + 'px'
    },
    bottomZ() {
      return Math.floor(this.size.z - this.size.y / 2) + 'px'
    }
  },
  created() {
    this.creat()
  },
  watch: {
    size: {
      handler() {
        this.creat()
      },
      deep: true
    }
  },
  methods: {
    creat() {
      this.styleLeft.width = this.styleRight.width = this.size.y + 'px';
      this.styleLeft.height = this.styleRight.height = this.size.z + 'px';
      this.styleTop.width = this.styleBottom.width = this.size.x + 'px';
      this.styleTop.height = this.styleBottom.height = this.size.y + 'px';
      this.stylePre.width = this.styleBack.width = this.size.x + 'px';
      this.stylePre.height = this.styleBack.height = this.size.z + 'px';

      this.styleLeft.transform = `rotateY(-90deg) translateZ(${this.leftZ})`;
      this.styleRight.transform = `rotateY(90deg) translateZ(${this.rightZ})`;
      this.styleTop.transform = `rotateX(90deg) translateZ(${this.topZ})`;
      this.styleBottom.transform = `rotateX(-90deg) translateZ(${this.bottomZ})`;
      this.stylePre.transform = `translateZ(${this.preZ})`;
      this.styleBack.transform = `rotateY(180deg) translateZ(${this.backZ})`;
    }
  }
})