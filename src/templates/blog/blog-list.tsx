import { Search } from "@/components/search";
import { PostCard } from './components/post-card';
import { PostGridList } from "./components/post-grid-list";
import { allPosts } from "contentlayer/generated";

export function BlogList() {
  const posts = allPosts;

  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="pb-10">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            {/* TAG */}
            <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
              BLOG
            </span>

            {/* Titulo */}
            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              Dicas e estratégias para impulsionar seu negócio
            </h1>
          </div>
          <Search />
        </div>
      </header>

      {/* Listagem de posts */}
      <PostGridList>
        {posts.map(post => (
          <PostCard
            key={post._id}
            post={{
              title: post.title,
              description: post.description,
              date: new Date(post.date).toLocaleDateString('pt-BR'),
              slug: post.slug,
              image: post.image,
              author: {
                avatar: post.author.avatar,
                name: post.author.name,
              }
            }}
          />
        ))}
      </PostGridList>



    </div>
  )
}