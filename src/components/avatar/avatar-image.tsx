import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

type AvatarSize = 'xs' | 'sm'

const avatarSize = {
  xs: 'w-5 h-5',
  sm: 'w-9 h-9',
}

type AvatarImageProps = Omit<ImageProps, 'width' | 'height'> & {
  size?: AvatarSize
};

export const AvatarImage = ({
  src,
  alt,
  size = 'sm',
  ...rest
}: AvatarImageProps) => (
  <div
    className={cn(
      'relative overflow-hidden rounded-full border-blue-200 border-[1px]',
      avatarSize[size]
    )}
  >
    <Image {...rest} src={src} alt={alt} fill />;
  </div>
)