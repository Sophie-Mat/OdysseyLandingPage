const GameDescriptionSection = ({ text }) => (
  <div className="w-full max-w-7xl mx-auto mb-8 px-10">
    <h2 className="text-white font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 text-center italic">
      {text('gameDescriptionTitle')}
    </h2>
    <p className="text-white md:text-sm lg:text-xl text-justify leading-relaxed lg:leading-normal mb-6 italic">
      {text('gameDescription')}
    </p>
  </div>
);

export default GameDescriptionSection;