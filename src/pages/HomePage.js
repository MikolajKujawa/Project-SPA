import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Dlaczego nie ma jeszcze Cyberpunka?",
        author: "Jan Nowak",
        text:     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, enim suscipit. Facilis, delectus laudantium. Voluptas, optio enim. Facere eaque pariatur ullam hic dolor. Quibusdam quam voluptatum eaque alias reiciendis obcaecati!"   
    },
    {
        id: 2,
        title: "Czym jest Czarna Dziura?",
        author: "Jan Nowak",
        text:     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, enim suscipit. Facilis, delectus laudantium. Voluptas, optio enim. Facere eaque pariatur ullam hic dolor. Quibusdam quam voluptatum eaque alias reiciendis obcaecati!"   
    },
    {
        id: 3,
        title: "Masoni i reptilianie?",
        author: "Jan Nowak",
        text:     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, enim suscipit. Facilis, delectus laudantium. Voluptas, optio enim. Facere eaque pariatur ullam hic dolor. Quibusdam quam voluptatum eaque alias reiciendis obcaecati!"   
    }
    

]

const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))
    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;