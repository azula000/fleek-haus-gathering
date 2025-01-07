import { Code, Pencil, Lightbulb, Palette } from "lucide-react";

const roles = [
  {
    title: "Builders & Developers",
    description: "Technical experts passionate about decentralized infrastructure",
    icon: Code,
  },
  {
    title: "Content Creators",
    description: "Storytellers who create engaging content about web development",
    icon: Pencil,
  },
  {
    title: "Thought Leaders",
    description: "Industry experts who educate and inspire others",
    icon: Lightbulb,
  },
  {
    title: "Creative Talents",
    description: "Artists, designers, and creative minds pushing boundaries",
    icon: Palette,
  },
];

export const WhoCanJoin = () => {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Who Can Join?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We welcome diverse talents who share our vision for the future of the internet
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <div
              key={role.title}
              className="relative p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4">
                <role.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {role.title}
              </h3>
              <p className="text-gray-600">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};