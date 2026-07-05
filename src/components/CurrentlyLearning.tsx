export default function CurrentlyLearning() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16 relative z-10">
      <div className="text-center">
        <span className="inline-block bg-portfolio-mint/10 text-portfolio-mint text-xs font-semibold px-4 py-1 rounded-full mb-4 border border-portfolio-mint/20">
          🌱 Currently Learning
        </span>
        <h3 className="text-2xl font-bold text-portfolio-dark-text mb-3">
          Diving into AI & Machine Learning
        </h3>
        <p className="text-portfolio-dark-text/70 max-w-xl mx-auto">
          I'm currently working on an AI-based project, applying my existing knowledge of <span className="font-semibold text-portfolio-coral">NumPy</span> and <span className="font-semibold text-portfolio-coral">Pandas</span> for data handling, while continuing to learn new AI/ML concepts as I go deeper into the field.
        </p>
      </div>
    </section>
  );
}