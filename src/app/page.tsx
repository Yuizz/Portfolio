import Home from "./_sections/Home";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 dark:bg-stone-950 light:bg-red-400">
      <section id="home" className="py-4 w-full">
        <Home />
      </section>
      <section id="skills" className="py-44">Skills Section</section>
      <section id="projects" className="py-44 mb-80">Projects section</section>
    </div>
  );
}
