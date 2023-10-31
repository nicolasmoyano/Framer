import { FC } from "react";
import {AnimatePresence, motion} from 'framer-motion';

const Home: FC = () => {
  return (
    <>
    <AnimatePresence>
      <section>
        <motion.div className="hero min-h-[calc(100vh-64px)] bg-base-200"
        transition={{ delay: 0.5 }}
        initial={{ opacity: 0, y:-100 }}
        animate={{ opacity: 1, y: 0}}
        exit={{ opacity: 0, y: 100 }}>
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/images/hero.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Welcome</h1>
              <p className="py-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                minima laboriosam maxime sed dignissimos harum provident itaque
                fugiat. A repellat aliquid inventore dolor tempora, omnis
                perferendis aspernatur quo nisi excepturi. Ex, ullam odio iusto
                esse necessitatibus doloremque repudiandae!
              </p>
              <button className="btn-primary btn">Get Started</button>
            </div>
          </div>
        </motion.div>
      </section>
      </AnimatePresence>
    </>
  );
};

export default Home;
