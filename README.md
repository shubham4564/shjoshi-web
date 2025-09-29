# Shubham Joshi - Personal Portfolio

A modern, responsive personal portfolio website showcasing my work as a Network Engineer and PhD researcher specializing in cryptography and blockchain technology.

## 🌟 Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between dark and light modes with persistent preference
- **Modern UI**: Built with Tailwind CSS for a clean, professional appearance
- **Smooth Animations**: Typing animation, hover effects, and smooth scrolling
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Focused**: Optimized images and minimal JavaScript

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom styles with Tailwind CSS
- **JavaScript**: Vanilla JS for interactivity
- **Fonts**: Inter font family from Google Fonts

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 12 or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

## 🚀 Getting Started

### Step 1: Clone the Repository

#### For Windows (Command Prompt/PowerShell):
```cmd
# Open Command Prompt or PowerShell and run:
git clone https://github.com/shubham4564/shjoshi-web.git
cd shjoshi-web
```

#### For Linux Terminal:
```bash
# Open Terminal and run:
git clone https://github.com/shubham4564/shjoshi-web.git
cd shjoshi-web
```

#### For Mac Terminal:
```bash
# Open Terminal and run:
git clone https://github.com/shubham4564/shjoshi-web.git
cd shjoshi-web
```

### Step 2: Install Surge (Static Web Publishing)

Surge is a simple, single-command web publishing platform that allows you to deploy static websites quickly.

#### For Windows (Command Prompt/PowerShell):
```cmd
npm install -g surge
```

#### For Linux Terminal:
```bash
sudo npm install -g surge
```

#### For Mac Terminal:
```bash
sudo npm install -g surge
```

### Step 3: Deploy to Surge

#### First-time deployment:

1. **Navigate to your project directory** (if not already there):
   ```bash
   cd shjoshi-web
   ```

2. **Run surge command**:
   ```bash
   surge
   ```

3. **Follow the prompts**:
   - **Email**: Enter your email address (first-time users will be asked to create an account)
   - **Password**: Enter your password
   - **Project path**: Press Enter to use current directory, or specify the path to your project
   - **Domain**: Choose a custom domain or press Enter to get a random surge.sh subdomain

#### Example deployment process:
```bash
$ surge

   Welcome to surge! (surge.sh)
   Login (or create surge account) by entering email & password.

          email: your-email@example.com
       password: [hidden]

   Running as your-email@example.com (Student)

          project: /path/to/shjoshi-web/
         domain: shjoshi-portfolio.surge.sh
         upload: [====================] 100% eta: 0.0s (6 files, 1234567 bytes)
            CDN: [====================] 100%

   Success! - Published to shjoshi-portfolio.surge.sh
```

#### Subsequent deployments:
For future updates, simply run:
```bash
surge
```
Surge will remember your domain and deploy updates automatically.

## 🌐 Custom Domain (Optional)

To use a custom domain with Surge:

1. **Deploy with custom domain**:
   ```bash
   surge --domain yourdomain.com
   ```

2. **Update your DNS settings** with your domain provider:
   - Add a CNAME record pointing to `na-west1.surge.sh`
   - Or add A records pointing to Surge's IP addresses

3. **Verify deployment**:
   - Visit your custom domain to confirm it's working

## 📁 Project Structure

```
shjoshi-web/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # Custom CSS styles
├── js/
│   └── main.js           # JavaScript functionality
├── Shubham_Joshi_CV.pdf  # Resume/CV file
├── shubhamphoto.jpg      # Profile photo
├── package.json          # Project dependencies
└── README.md            # This file
```

## 🎨 Customization

### Updating Content
- **Personal Information**: Edit the content directly in `index.html`
- **Styling**: Modify `css/styles.css` or use Tailwind classes in HTML
- **Functionality**: Update `js/main.js` for interactive features

### Replacing Images
- Replace `shubhamphoto.jpg` with your profile photo
- Update `Shubham_Joshi_CV.pdf` with your resume
- Ensure images are optimized for web (recommended: WebP format for better performance)

### Colors and Theme
The website uses a sky blue accent color scheme. To change colors:
- Update Tailwind color classes in `index.html`
- Modify CSS custom properties in the `<style>` section

## 🔧 Local Development

To test your changes locally before deploying:

1. **Open the project** in your preferred code editor
2. **Open `index.html`** in a web browser, or
3. **Use a local server** (recommended):
   ```bash
   # Using Python (if installed)
   python -m http.server 8000
   
   # Using Node.js http-server (install first: npm install -g http-server)
   http-server
   
   # Using Live Server extension in VS Code
   ```

## 📱 Browser Compatibility

This website is compatible with:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal portfolio project, but if you find bugs or have suggestions:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: hello@shjoshi.com.np
- **LinkedIn**: [linkedin.com/in/shubham4564](https://linkedin.com/in/shubham4564)
- **GitHub**: [github.com/shubham4564](https://github.com/shubham4564)
- **Twitter**: [twitter.com/shubham4564](https://twitter.com/shubham4564)

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first CSS framework
- **Google Fonts** for the Inter font family
- **Surge.sh** for simple static web hosting
- **Feather Icons** for the beautiful SVG icons

---

**Made with ❤️ by Shubham Joshi**

For any questions or support, feel free to reach out through any of the contact methods above!