console.log("hello world");
// for using object: ({})
// ساختار رو اینجا ساختم <<>>

const app1 = Vue.createApp({
    template: '<h2> this is test text 1 </h2>'    
})

const app2 = Vue.createApp({
    // date property, function
    // ما کار هایی را با استفاده از تمپلیت انجام میدیم که توسط اچ تی ام ال قابل انجام نباشند
    // template: '<h2> this is test text </h2> معادل تگ اچ ۲ واقع در فایل اچ تی ام ال
    // ما میتونیم یک تابع رو به عنوان ویژگی در نطر بگیریم که مقدار اون یک فانکشن هست که خودش ابجکت برمیگردونه
    data() {
        return {
            url: "https://www.google.com",
            x:0,
            y:0,
            showBooksDetails: true,
            title_1: "boofe koor",
            author_1: 'sadegh hedayat',
            age_1: 45,
            books: [
                {title: "boofe koor", author: 'sadegh hedayat', image: 'images/1.jpeg', isFav: true},
                {title: "sage velgard", author: 'sadegh hedayat', image: 'images/2.jpeg', isFav: true},
                {title: "pedare pooldar pedare bi pool", author: 'robert kyusaki', image: 'images/3.jpeg', isFav: true},
            ]
        }
    },

    methods: {
        showName() {
            console.log("fff");
        },

        changeTitle(title) {
            this.title = title;
            console.log('clicked');
        },

        hideBooksDetails() {
            // this.showBooksDetails = false; // just false it
            this.showBooksDetails = !this.showBooksDetails;
        },

        handleEvent(e) {
            console.log(e); // showing the object
        },

        handleMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },

        changeFav(book) {
            book.isFav = !book.isFav;
        },
    },

    computed: {
        filteredBooks() {
            // کار این متد اینه که میاد و اون کتاب هایی که مقدار ایزفیو ترو دارن رو برمیگردونه (همه کتابها رو نه)
            return this.books.filter(book => book.isFav)
        }
    },
});

// <<>> بعد قرارش دادم روی این المنت
app1.mount("#app1");
app2.mount("#app2");
// توی اینس\کت وبسایت با این صحنه مواجه میشیم:
// <div id="app" data-v-app>
// data-v-app:
// یعنی این برنامه توسط ویو تحت کنترل است
