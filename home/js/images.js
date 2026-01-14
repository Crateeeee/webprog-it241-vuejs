const galleryApp = Vue.createApp({
    data() {
        return {
            techImages: [
                {
                    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
                    title: 'Web Development',
                    desc: 'Building responsive layouts'
                },
                {
                    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
                    title: 'Coding Setup',
                    desc: 'My dual monitor workstation'
                },
                {
                    url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
                    title: 'Cyber Security',
                    desc: 'Exploring system protection'
                },
                {
                    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
                    title: 'Hardware',
                    desc: 'Understanding the circuits'
                }
            ]
        }
    }
});

galleryApp.mount('#app');