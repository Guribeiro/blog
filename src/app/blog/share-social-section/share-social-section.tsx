'use client'
import { useParams } from 'next/navigation';

import { useShare } from "@/hooks/use-share/use-share";
import { PostProps } from '@/templates/blog/components/post-card';
import { Button } from '@/components/ui/button';

type ShareSocialSectionProps = {
  post: PostProps
}

export const ShareSocialSection = ({ post }: ShareSocialSectionProps) => {
  const { slug } = useParams<{ slug: string }>();

  const postUrl = `http://localhost:3000/blog/${slug}`;

  const { shareButtons } = useShare({
    url: postUrl,
    title: post.title,
    text: post.description,
  });

  return (
    <aside className="space-y-6">
      <div className="rounded-lg bg-gray-700 ">
        <h2 className="mb-4 text-heading-xs text-gray-100">
          Compartilhar
        </h2>

        <div className="space-y-3">
          {shareButtons.map((provider) => (
            <Button
              key={provider.provider}
              onClick={() => provider.action()}
              variant="outline"
              className="w-full justify-start gap-2"
            >
              {provider.icon}
              {provider.name}
            </Button>
          ))}
        </div>
      </div>
    </aside>
  )
}