export interface FileData {
  name: string;
  path: string;
  content: string;
  language: string;
  type: 'file';
}

export interface FolderData {
  name: string;
  path: string;
  children: (FileData | FolderData)[];
  type: 'folder';
}

export const mockFlutterProject: FolderData = {
  name: 'flutter_app',
  path: '',
  type: 'folder',
  children: [
    {
      name: 'lib',
      path: 'lib',
      type: 'folder',
      children: [
        {
          name: 'theme',
          path: 'lib/theme',
          type: 'folder',
          children: [
            {
              name: 'app_theme.dart',
              path: 'lib/theme/app_theme.dart',
              content: `import 'package:flutter/material.dart';

class AppTheme {
  static ThemeData get lightTheme {
    return ThemeData(
      useMaterial3: true,
      colorScheme: ColorScheme.fromSeed(
        seedColor: Colors.blue,
        brightness: Brightness.light,
      ),
      appBarTheme: const AppBarTheme(
        centerTitle: true,
        backgroundColor: Colors.transparent,
        foregroundColor: Colors.black,
        elevation: 0,
      ),
      cardTheme: CardTheme(
        elevation: 2,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(12),
        ),
      ),
    );
  }

  static ThemeData get darkTheme {
    return ThemeData(
      useMaterial3: true,
      colorScheme: ColorScheme.fromSeed(
        seedColor: Colors.blue,
        brightness: Brightness.dark,
      ),
      appBarTheme: const AppBarTheme(
        centerTitle: true,
        backgroundColor: Colors.transparent,
        foregroundColor: Colors.white,
        elevation: 0,
      ),
      cardTheme: CardTheme(
        elevation: 2,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(12),
        ),
      ),
    );
  }
}`,
              language: 'dart',
              type: 'file'
            },
            {
              name: 'colors.dart',
              path: 'lib/theme/colors.dart',
              content: `import 'package:flutter/material.dart';

class AppColors {
  static const Color primary = Color(0xFF2196F3);
  static const Color secondary = Color(0xFF1976D2);
  static const Color accent = Color(0xFF03DAC6);
  static const Color error = Color(0xFFB00020);
  static const Color surface = Color(0xFFFAFAFA);
  static const Color background = Color(0xFFFFFFFF);
  
  static const Color textPrimary = Color(0xFF212121);
  static const Color textSecondary = Color(0xFF757575);
  
  static const Color success = Color(0xFF4CAF50);
  static const Color warning = Color(0xFFFF9800);
  static const Color info = Color(0xFF2196F3);
}`,
              language: 'dart',
              type: 'file'
            }
          ]
        },
        {
          name: 'screens',
          path: 'lib/screens',
          type: 'folder',
          children: [
            {
              name: 'home_screen.dart',
              path: 'lib/screens/home_screen.dart',
              content: `import 'package:flutter/material.dart';
import '../widgets/custom_button.dart';
import '../widgets/product_card.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Flutter App'),
        actions: [
          IconButton(
            icon: const Icon(Icons.search),
            onPressed: () {},
          ),
          IconButton(
            icon: const Icon(Icons.notifications),
            onPressed: () {},
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Welcome to Flutter!',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            
            // Featured Products Section
            const Text(
              'Featured Products',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.w600,
              ),
            ),
            const SizedBox(height: 12),
            
            SizedBox(
              height: 200,
              child: ListView.builder(
                scrollDirection: Axis.horizontal,
                itemCount: 5,
                itemBuilder: (context, index) {
                  return const Padding(
                    padding: EdgeInsets.only(right: 12.0),
                    child: ProductCard(
                      title: 'Product ' + index.toString(),
                      price: '\\$29.99',
                      imageUrl: 'https://picsum.photos/200/200',
                    ),
                  );
                },
              ),
            ),
            
            const SizedBox(height: 24),
            
            // Action Buttons
            Row(
              children: [
                Expanded(
                  child: CustomButton(
                    text: 'Get Started',
                    onPressed: () {},
                    variant: ButtonVariant.primary,
                  ),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: CustomButton(
                    text: 'Learn More',
                    onPressed: () {},
                    variant: ButtonVariant.secondary,
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}`,
              language: 'dart',
              type: 'file'
            },
            {
              name: 'profile_screen.dart',
              path: 'lib/screens/profile_screen.dart',
              content: `import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Profile'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            // Profile Header
            const CircleAvatar(
              radius: 50,
              backgroundImage: NetworkImage('https://picsum.photos/100/100'),
            ),
            const SizedBox(height: 16),
            const Text(
              'John Doe',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),
            const Text(
              'john.doe@example.com',
              style: TextStyle(
                fontSize: 16,
                color: Colors.grey,
              ),
            ),
            const SizedBox(height: 32),
            
            // Profile Options
            ListTile(
              leading: const Icon(Icons.edit),
              title: const Text('Edit Profile'),
              trailing: const Icon(Icons.arrow_forward_ios),
              onTap: () {},
            ),
            ListTile(
              leading: const Icon(Icons.settings),
              title: const Text('Settings'),
              trailing: const Icon(Icons.arrow_forward_ios),
              onTap: () {},
            ),
            ListTile(
              leading: const Icon(Icons.help),
              title: const Text('Help & Support'),
              trailing: const Icon(Icons.arrow_forward_ios),
              onTap: () {},
            ),
            ListTile(
              leading: const Icon(Icons.logout, color: Colors.red),
              title: const Text('Logout', style: TextStyle(color: Colors.red)),
              onTap: () {},
            ),
          ],
        ),
      ),
    );
  }
}`,
              language: 'dart',
              type: 'file'
            }
          ]
        },
        {
          name: 'app',
          path: 'lib/app',
          type: 'folder',
          children: [
            {
              name: 'app.dart',
              path: 'lib/app/app.dart',
              content: `import 'package:flutter/material.dart';
import '../theme/app_theme.dart';
import '../router/app_router.dart';
import '../screens/home_screen.dart';
import '../screens/profile_screen.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Flutter App',
      theme: AppTheme.lightTheme,
      darkTheme: AppTheme.darkTheme,
      themeMode: ThemeMode.system,
      routerConfig: AppRouter.router,
      debugShowCheckedModeBanner: false,
    );
  }
}`,
              language: 'dart',
              type: 'file'
            }
          ]
        },
        {
          name: 'router',
          path: 'lib/router',
          type: 'folder',
          children: [
            {
              name: 'app_router.dart',
              path: 'lib/router/app_router.dart',
              content: `import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../screens/home_screen.dart';
import '../screens/profile_screen.dart';

class AppRouter {
  static final router = GoRouter(
    initialLocation: '/',
    routes: [
      GoRoute(
        path: '/',
        builder: (context, state) => const HomeScreen(),
      ),
      GoRoute(
        path: '/profile',
        builder: (context, state) => const ProfileScreen(),
      ),
    ],
    errorBuilder: (context, state) => Scaffold(
      appBar: AppBar(title: const Text('Error')),
      body: Center(
        child: Text('Page not found: ' + state.location),
      ),
    ),
  );
}`,
              language: 'dart',
              type: 'file'
            }
          ]
        },
        {
          name: 'widgets',
          path: 'lib/widgets',
          type: 'folder',
          children: [
            {
              name: 'custom_button.dart',
              path: 'lib/widgets/custom_button.dart',
              content: `import 'package:flutter/material.dart';

enum ButtonVariant { primary, secondary, outline }

class CustomButton extends StatelessWidget {
  final String text;
  final VoidCallback onPressed;
  final ButtonVariant variant;
  final bool isLoading;
  final bool disabled;

  const CustomButton({
    super.key,
    required this.text,
    required this.onPressed,
    this.variant = ButtonVariant.primary,
    this.isLoading = false,
    this.disabled = false,
  });

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: disabled || isLoading ? null : onPressed,
      style: _getButtonStyle(),
      child: isLoading
          ? const SizedBox(
              width: 20,
              height: 20,
              child: CircularProgressIndicator(
                strokeWidth: 2,
                color: Colors.white,
              ),
            )
          : Text(text),
    );
  }

  ButtonStyle _getButtonStyle() {
    switch (variant) {
      case ButtonVariant.primary:
        return ElevatedButton.styleFrom(
          backgroundColor: Theme.of(context).primaryColor,
          foregroundColor: Colors.white,
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8),
          ),
        );
      case ButtonVariant.secondary:
        return ElevatedButton.styleFrom(
          backgroundColor: Colors.grey[200],
          foregroundColor: Colors.black,
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8),
          ),
        );
      case ButtonVariant.outline:
        return ElevatedButton.styleFrom(
          backgroundColor: Colors.transparent,
          foregroundColor: Theme.of(context).primaryColor,
          side: BorderSide(color: Theme.of(context).primaryColor),
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8),
          ),
        );
    }
  }
}`,
              language: 'dart',
              type: 'file'
            },
            {
              name: 'product_card.dart',
              path: 'lib/widgets/product_card.dart',
              content: `import 'package:flutter/material.dart';

class ProductCard extends StatelessWidget {
  final String title;
  final String price;
  final String imageUrl;
  final VoidCallback? onTap;

  const ProductCard({
    super.key,
    required this.title,
    required this.price,
    required this.imageUrl,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      clipBehavior: Clip.antiAlias,
      child: InkWell(
        onTap: onTap,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Product Image
            Expanded(
              flex: 3,
              child: Image.network(
                imageUrl,
                width: double.infinity,
                fit: BoxFit.cover,
                errorBuilder: (context, error, stackTrace) {
                  return Container(
                    color: Colors.grey[200],
                    child: const Icon(
                      Icons.image_not_supported,
                      size: 48,
                      color: Colors.grey,
                    ),
                  );
                },
              ),
            ),
            
            // Product Info
            Expanded(
              flex: 2,
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      title,
                      style: const TextStyle(
                        fontWeight: FontWeight.w600,
                        fontSize: 14,
                      ),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                    ),
                    Text(
                      price,
                      style: const TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 16,
                        color: Colors.green,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}`,
              language: 'dart',
              type: 'file'
            }
          ]
        },
        {
          name: 'main.dart',
          path: 'lib/main.dart',
          content: `import 'package:flutter/material.dart';
import 'app/app.dart';

void main() {
  runApp(const MyApp());
}

// Additional setup can be done here
void setupApp() {
  // Initialize services
  // Set up error handling
  // Configure dependencies
}`,
          language: 'dart',
          type: 'file'
        }
      ]
    },
    {
      name: 'pubspec.yaml',
      path: 'pubspec.yaml',
      content: `name: flutter_app
description: A new Flutter project.
publish_to: 'none'

version: 1.0.0+1

environment:
  sdk: '>=3.0.0 <4.0.0'
  flutter: ">=3.10.0"

dependencies:
  flutter:
    sdk: flutter
  cupertino_icons: ^1.0.2
  go_router: ^12.1.3
  
dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0

flutter:
  uses-material-design: true
  
  assets:
    - assets/images/
    - assets/icons/

  fonts:
    - family: Roboto
      fonts:
        - asset: fonts/Roboto-Regular.ttf
        - asset: fonts/Roboto-Bold.ttf
          weight: 700`,
      language: 'yaml',
      type: 'file'
    },
    {
      name: 'analysis_options.yaml',
      path: 'analysis_options.yaml',
      content: `# This file configures the analyzer, which statically analyzes Dart code to
# check for errors, warnings, and lints.
#
# The issues identified by the analyzer are surfaced in the UI of Dart-enabled
# IDEs (https://dart.dev/tools#ides-and-editors). The analyzer can also be
# invoked from the command line by running flutter analyze.

# The following line activates a set of recommended lints for Flutter apps,
# packages, and plugins designed to encourage good coding practices.
include: package:flutter_lints/flutter.yaml

linter:
  # The lint rules applied to this project can be customized in the
  # section below to disable rules from the package:flutter_lints/flutter.yaml
  # included above or to enable additional rules. A list of all available lints
  # and their documentation is published at
  # https://dart-lang.github.io/linter/lints/index.html.
  #
  # Instead of disabling a lint rule for the entire project in the
  # section below, it can also be suppressed for a single line of code
  # or a specific dart file by using the // ignore: name_of_lint and
  # // ignore_for_file: name_of_lint syntax on the line or in the file
  # producing the lint.
  rules:
    # avoid_print: false  # Uncomment to disable the avoid_print rule
    # prefer_single_quotes: true  # Uncomment to enable the prefer_single_quotes rule

# Additional information about this file can be found at
# https://dart.dev/guides/language/analysis-options`,
      language: 'yaml',
      type: 'file'
    },
    {
      name: '.gitignore',
      path: '.gitignore',
      content: `# Miscellaneous
*.class
*.log
*.pyc
*.swp
.DS_Store
.atom/
.buildlog/
.history
.svn/
migrate_working_dir/

# IntelliJ related
*.iml
*.ipr
*.iws
.idea/

# The .vscode folder contains launch configuration and tasks you configure in
# VS Code which you may wish to be included in version control, so this line
# is commented out by default.
#.vscode/

# Flutter/Dart/Pub related
**/doc/api/
**/ios/Flutter/flutter_assets/
**/ios/Flutter/flutter_export_environment.sh
.dart_tool/
.flutter-plugins
.flutter-plugins-dependencies
.packages
.pub-cache/
.pub/
/build/

# Symbolication related
app.*.symbols

# Obfuscation related
app.*.map.json

# Android Studio will place build artifacts here
/android/app/debug
/android/app/profile
/android/app/release`,
      language: 'gitignore',
      type: 'file'
    },
    {
      name: 'README.md',
      path: 'README.md',
      content: `# Flutter App

A beautiful Flutter application built with modern architecture and best practices.

## Features

- 🎨 Modern Material Design 3 UI
- 📱 Responsive design for all screen sizes
- 🚀 Clean architecture with separation of concerns
- 🧪 Well-tested and maintainable code
- 🌐 Navigation with GoRouter
- 🎯 Custom widgets and components

## Getting Started

### Prerequisites

- Flutter SDK (>=3.10.0)
- Dart SDK (>=3.0.0)
- Android Studio / VS Code with Flutter extensions

### Installation

1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd flutter_app
\`\`\`

2. Install dependencies
\`\`\`bash
flutter pub get
\`\`\`

3. Run the app
\`\`\`bash
flutter run
\`\`\`

## Project Structure

\`\`\`
lib/
├── app/           # App configuration and main widget
├── screens/       # Screen widgets
├── widgets/       # Reusable UI components
├── theme/         # App themes and colors
├── router/        # Navigation configuration
└── main.dart      # Entry point
\`\`\`

## Architecture

This app follows a clean architecture pattern with:

- **Feature-first organization**: Each feature has its own folder
- **Dependency injection**: Service locator pattern for dependencies
- **State management**: Provider/Bloc for state management
- **Navigation**: GoRouter for declarative navigation

## Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add some amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.`,
      language: 'markdown',
      type: 'file'
    }
  ]
};

// Helper function to convert the tree structure to a flat map for the editor
export const flattenProjectFiles = (folder: FolderData): Map<string, FileData> => {
  const files = new Map<string, FileData>();
  
  const traverse = (node: FolderData | FileData) => {
    if (node.type === 'folder') {
      node.children.forEach(traverse);
    } else {
      files.set(node.path, node);
    }
  };
  
  traverse(folder);
  return files;
};

// Get the initial file to open (main.dart)
export const getInitialFile = (folder: FolderData): FileData | null => {
  const files = flattenProjectFiles(folder);
  return files.get('lib/main.dart') || null;
};
