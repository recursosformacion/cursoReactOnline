import { faker } from '@faker-js/faker';

let posts = [1,2,3,4,5,6,7,8,9,10];

const datos_posts = posts.map(post =>{
    return {
        id:post,
        title:faker.lorem.paragraph(),
        excerpt: faker.lorem.paragraph(10),
        content: faker.lorem.paragraph(100),
        author: faker.name.findName()

    }

});
export default datos_posts;