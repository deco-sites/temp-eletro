import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

export interface SubBannerProps {
  desktop: ImageWidget;
  mobile: ImageWidget;

  alt: string;
  example: string;
  action?: {
    /** @description when user clicks on the image, go to this link */
    href: string;
    /** @description Image text title */
    title: string;
    /** @description Image text subtitle */
    subTitle: string;
    /** @description Button label */
    label: string;
  };
  preload?: boolean;
}
  
function SubBanner(banner: SubBannerProps) {
    return (
        <div class="mt-2 h-[20vh] container">
            <a href={banner?.banner?.action?.href ?? "/"} title={banner?.banner?.action?.title} aria-label={banner?.banner?.action?.label}>
                <Picture preload={banner?.banner?.preload}>
                    <Source
                        media="(max-width: 767px)"
                        fetchPriority={banner?.banner?.preload ? "high" : "low"}
                        src={banner?.banner?.mobile ?? "https://placehold.co/656x300"}
                        width={360}
                        height={150}
                    />
                    <Source
                        media="(min-width: 768px)"
                        fetchPriority={banner?.banner?.preload ? "high" : "low"}
                        src={banner?.banner?.desktop ?? "https://placehold.co/656x300"}
                        width={1440}
                        height={150}
                    />
                    <img  
                        class="object-cover w-full h-full"
                        loading={banner?.banner?.preload ? "eager" : "lazy"}
                        src={banner?.banner?.desktop ?? "/"}
                        alt={banner?.banner?.alt}>
                    </img>
                </Picture>
            </a>
        </div>
    )
}

export default SubBanner;