import "@fontsource-variable/league-spartan";
import { cn } from "cn";

import star from "./assets/icon-star.svg";
import bgPatternTopDesktop from "./assets/bg-pattern-top-desktop.svg";
import bgPatternBottomDesktop from "./assets/bg-pattern-bottom-desktop.svg";
import coltonAvatar from "./assets/image-colton.jpg";
import anneAvatar from "./assets/image-anne.jpg";
import ireneAvatar from "./assets/image-irene.jpg";

export function App() {
  const style = {
    "bg-dark-magenta": "bg-[hsl(300,43%,22%)]",
    "bg-gray-magenta": "bg-[hsl(303,10%,53%)]",
    "bg-light-gray-magenta": "bg-[hsl(300,24%,96%)]",
    "text-dark-magenta": "text-[hsl(300,43%,22%)]",
    "text-gray-magenta": "text-[hsl(303,10%,53%)]",
    "text-soft-pink": "text-[hsl(333,80%,67%)]",
  };
  return (
    <main className="bg-white p-6 relative flex flex-col items-center justify-center font-['League_Spartan_Variable']">
      <img src={bgPatternTopDesktop} className="absolute top-0 left-0 z-1" />
      <section className="relative z-2 max-w-6xl mx-auto py-16">
        <div className="grid lg:grid-cols-[45%_1fr] gap-10">
          <div className="col-span-1 space-y-6">
            <h1
              className={cn(
                style["text-dark-magenta"],
                "font-bold text-6xl leading-[0.85] text-center lg:text-left",
              )}
            >
              10,000+ of our users love our products.
            </h1>
            <p
              className={cn(
                style["text-gray-magenta"],
                "text-lg lg:w-[90%] leading-normal text-center lg:text-left",
              )}
              style={{ fontWeight: "500" }}
            >
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div className="col-span-1 flex flex-col justify-center gap-4">
            <div
              className={cn(
                style["bg-light-gray-magenta"],
                "py-4 px-6 flex flex-col lg:flex-row items-center gap-4 lg:w-100 rounded-lg lg:self-start",
              )}
            >
              <div className="flex items-center gap-2">
                {[...Array(5).keys()].map((item) => (
                  <img key={item} src={star} />
                ))}
              </div>
              <p
                className={cn(style["text-dark-magenta"])}
                style={{ fontWeight: "700" }}
              >
                Rated 5 Stars in Reviews
              </p>
            </div>
            <div
              className={cn(
                style["bg-light-gray-magenta"],
                "py-4 px-6 flex flex-col lg:flex-row items-center gap-4 lg:w-100 rounded-lg lg:self-center",
              )}
            >
              <div className="flex items-center gap-2">
                {[...Array(5).keys()].map((item) => (
                  <img key={item} src={star} />
                ))}
              </div>
              <p
                className={cn(style["text-dark-magenta"])}
                style={{ fontWeight: "700" }}
              >
                Rated 5 Stars in Report Guru
              </p>
            </div>
            <div
              className={cn(
                style["bg-light-gray-magenta"],
                "py-4 px-6 flex flex-col lg:flex-row items-center gap-4 lg:w-100 rounded-lg lg:self-end",
              )}
            >
              <div className="flex items-center gap-2">
                {[...Array(5).keys()].map((item) => (
                  <img key={item} src={star} />
                ))}
              </div>
              <p
                className={cn(style["text-dark-magenta"])}
                style={{ fontWeight: "700" }}
              >
                Rated 5 Stars in BestTech
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 pb-16">
        <div className="col-span-1 lg:pb-6">
          <div
            className={cn(
              style["bg-dark-magenta"],
              "p-8 rounded-lg text-white space-y-6",
            )}
          >
            <div className="flex items-center gap-4">
              <img src={coltonAvatar} className="w-12 h-12 rounded-full" />
              <div>
                <h2 style={{ fontWeight: "700" }}>Colton Smith</h2>
                <p className={cn(style["text-soft-pink"])}>Verified Buyer</p>
              </div>
            </div>
            <p>
              " We needed the same printed design as the one we had ordered a
              week prior. Not only did they find the original order, but we also
              received it in time. Excellent! "
            </p>
          </div>
        </div>
        <div className="col-span-1 lg:py-6">
          <div
            className={cn(
              style["bg-dark-magenta"],
              "p-8 rounded-lg text-white space-y-6",
            )}
          >
            <div className="flex items-center gap-4">
              <img src={ireneAvatar} className="w-12 h-12 rounded-full" />
              <div>
                <h2 style={{ fontWeight: "700" }}>Irene Roberts</h2>
                <p className={cn(style["text-soft-pink"])}>Verified Buyer</p>
              </div>
            </div>
            <p>
              " Customer service is always excellent and very quick turn around.
              Completely delighted with the simplicity of the purchase and the
              speed of delivery. "
            </p>
          </div>
        </div>
        <div className="col-span-1 lg:pt-12">
          <div
            className={cn(
              style["bg-dark-magenta"],
              "p-8 rounded-lg text-white space-y-6",
            )}
          >
            <div className="flex items-center gap-4">
              <img src={anneAvatar} className="w-12 h-12 rounded-full" />
              <div>
                <h2 style={{ fontWeight: "700" }}>Anne Wallace</h2>
                <p className={cn(style["text-soft-pink"])}>Verified Buyer</p>
              </div>
            </div>
            <p>
              " Put an order with this company and can only praise them for the
              very high standard. Will definitely use them again and recommend
              them to everyone! "
            </p>
          </div>
        </div>
      </section>
      <img
        src={bgPatternBottomDesktop}
        className="absolute bottom-0 right-0 z-1"
      />
    </main>
  );
}
