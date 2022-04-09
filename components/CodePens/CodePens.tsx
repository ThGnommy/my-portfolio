import { SinglePenComponent } from "./SinglePenComponent";

export const CodePens = () => {
  return (
    <section className="relative">
      <h2 className="text-4xl font-medium pb-4">Codepen Things</h2>
      <p className="text-xl pb-8 font-light">Having fun in my free time</p>

      {/* Less is More */}

      <div className="flex flex-wrap justify-center items-center w-full mb-8">
        <SinglePenComponent penTitle="Less is More" id="gORgBXz" />
        <SinglePenComponent penTitle="Anxiety" id="powRYmw" />
        <SinglePenComponent penTitle="Success - Experience" id="wveoEMe" />
        <SinglePenComponent penTitle="Truth - Perspective" id="xxrEJZa" />
        <SinglePenComponent penTitle="Talk doesn't cook rice" id="JjJbbZO" />
        <SinglePenComponent penTitle="Change" id="oNwzONg" />
        <SinglePenComponent
          penTitle="Less fear, more understanding"
          id="VwWjROj"
        />
      </div>
    </section>
  );
};
