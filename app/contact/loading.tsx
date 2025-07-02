export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      {/* Header Section */}
      <section className="mb-16">
        <div className="animate-pulse">
          <div className="h-12 bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-6 w-3/4"></div>
          <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-2/3"></div>
        </div>
      </section>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="animate-pulse">
            <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-6 w-1/2"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-2"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-2"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-3/4"></div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start space-x-4 animate-pulse">
                <div className="flex-shrink-0 w-10 h-10 bg-zinc-200 dark:bg-zinc-800 rounded-lg"></div>
                <div className="flex-1">
                  <div className="h-5 bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-2 w-1/3"></div>
                  <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-1/2"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="pt-6 border-t dark:border-zinc-800 border-zinc-200">
            <div className="h-5 bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-4 w-1/4 animate-pulse"></div>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-16 animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-zinc-900/50 border dark:border-zinc-800 border-zinc-200 rounded-2xl p-8 shadow-sm">
          <div className="mb-6 animate-pulse">
            <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-2 w-1/2"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-3/4"></div>
          </div>
          
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-2 w-1/4"></div>
                <div className="h-12 bg-zinc-200 dark:bg-zinc-800 rounded-lg"></div>
              </div>
            ))}
            <div className="h-12 bg-zinc-200 dark:bg-zinc-800 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <section className="mt-20 pt-16 border-t dark:border-zinc-800 border-zinc-200">
        <div className="text-center max-w-3xl mx-auto animate-pulse">
          <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-4 w-1/2 mx-auto"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-2"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-2"></div>
          <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-3/4 mx-auto"></div>
        </div>
      </section>
    </main>
  );
} 