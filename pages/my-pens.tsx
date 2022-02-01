import { NextPage } from "next";
import Layout from "../components/Layout";
import { IconPen } from "../components/Utils/Icons/IconPen";

export const MyPens: NextPage = () => {
  return (
    <Layout>
      <section>
        {/* Less is More */}
        <IconPen />
        <h3>Less is more.</h3>
        <iframe
          height="600"
          style={{ width: "100%" }}
          scrolling="no"
          title="Less is more."
          src="https://codepen.io/thgnommy/embed/preview/gORgBXz?default-tab=&theme-id=dark"
          frameBorder="no"
          loading="lazy"
          allowTransparency={true}
          allowFullScreen={true}
        >
          See the Pen{" "}
          <a href="https://codepen.io/thgnommy/pen/gORgBXz">Less is more.</a> by
          Thomas Brandoli (<a href="https://codepen.io/thgnommy">@thgnommy</a>)
          on <a href="https://codepen.io">CodePen</a>.
        </iframe>

        {/* Anxiety. */}

        <iframe
          height="600"
          style={{ width: "100%" }}
          scrolling="no"
          title="Anxiety."
          src="https://codepen.io/thgnommy/embed/preview/powRYmw?default-tab=&theme-id=dark"
          frameBorder="no"
          loading="lazy"
          allowTransparency={true}
          allowFullScreen={true}
        >
          See the Pen{" "}
          <a href="https://codepen.io/thgnommy/pen/powRYmw">Anxiety.</a> by
          Thomas Brandoli (<a href="https://codepen.io/thgnommy">@thgnommy</a>)
          on <a href="https://codepen.io">CodePen</a>.
        </iframe>

        {/* Truth - Perspective */}

        <iframe
          height="600"
          style={{ width: "100%" }}
          scrolling="no"
          title="Truth - Perspective"
          src="https://codepen.io/thgnommy/embed/preview/xxrEJZa?default-tab=&theme-id=dark"
          frameBorder="no"
          loading="lazy"
          allowTransparency={true}
          allowFullScreen={true}
        >
          See the Pen{" "}
          <a href="https://codepen.io/thgnommy/pen/xxrEJZa">
            Truth - Perspective
          </a>{" "}
          by Thomas Brandoli (
          <a href="https://codepen.io/thgnommy">@thgnommy</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </iframe>

        {/* Less fear, more understanding. */}

        <iframe
          height="600"
          style={{ width: "100%" }}
          scrolling="no"
          title="Less fear, more understanding."
          src="https://codepen.io/thgnommy/embed/preview/VwWjROj?default-tab=&theme-id=dark"
          frameBorder="no"
          loading="lazy"
          allowTransparency={true}
          allowFullScreen={true}
        >
          See the Pen{" "}
          <a href="https://codepen.io/thgnommy/pen/VwWjROj">
            Less fear, more understanding.
          </a>{" "}
          by Thomas Brandoli (
          <a href="https://codepen.io/thgnommy">@thgnommy</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </iframe>

        {/* Success - Experience */}

        <iframe
          height="600"
          style={{ width: "100%" }}
          scrolling="no"
          title="Success - Experience"
          src="https://codepen.io/thgnommy/embed/preview/wveoEMe?default-tab=&theme-id=dark"
          frameBorder="no"
          loading="lazy"
          allowTransparency={true}
          allowFullScreen={true}
        >
          See the Pen{" "}
          <a href="https://codepen.io/thgnommy/pen/wveoEMe">
            Success - Experience
          </a>{" "}
          by Thomas Brandoli (
          <a href="https://codepen.io/thgnommy">@thgnommy</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </iframe>

        {/* Talk doesn't cook rise. */}

        <iframe
          height="600"
          style={{ width: "100%" }}
          scrolling="no"
          title="Talk doesn't cook rise."
          src="https://codepen.io/thgnommy/embed/preview/JjJbbZO?default-tab=&theme-id=dark"
          frameBorder="no"
          loading="lazy"
          allowTransparency={true}
          allowFullScreen={true}
        >
          See the Pen{" "}
          <a href="https://codepen.io/thgnommy/pen/JjJbbZO">
            Talk doesn't cook rise.
          </a>{" "}
          by Thomas Brandoli (
          <a href="https://codepen.io/thgnommy">@thgnommy</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </section>
    </Layout>
  );
};

export default MyPens;
