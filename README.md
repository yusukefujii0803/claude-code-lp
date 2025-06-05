# 🚀 Claude Code マスター講座 - ランディングページ

Claude Codeを学ぶための最先端ランディングページ。革新的なWebテクノロジーとモダンなUIデザインを駆使した、プレミアムな学習体験を提供します。

![Claude Code Landing Page](https://img.shields.io/badge/Next.js-14.2.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.16-ff69b4?style=for-the-badge&logo=framer)

## ✨ 特徴

### 🎯 最先端のUI/UX
- **インタラクティブパーティクルシステム** - マウス追従型パーティクルエフェクト
- **カスタムマウスフォロワー** - ブランド独自のカーソルアニメーション
- **スムーススクロール** - Lenisによる滑らかなスクロール体験
- **パララックス効果** - 多層パララックススクロール

### 🌟 プレミアムアニメーション
- **タイピングアニメーション** - 動的テキスト変更エフェクト
- **スクロール駆動アニメーション** - ビューポート連動アニメーション
- **マイクロインタラクション** - 60FPSスムーズアニメーション
- **3Dエフェクト** - 立体的なビジュアル表現

### 🎨 モダンデザイン
- **グラスモーフィズム** - 半透明ガラス効果
- **動的グラデーション** - アニメーション付きカラー変化
- **レスポンシブ対応** - 全デバイス完全対応
- **ダークモード対応** - システム設定連動

### 📊 インタラクティブコンテンツ
- **リアルタイム統計** - カウントアップアニメーション
- **テスティモニアルカルーセル** - 高度なスライダー
- **インタラクティブプライシング** - 動的料金計算
- **FAQアコーディオン** - スムーズな展開アニメーション

## 🛠️ 技術スタック

### フロントエンド
- **Next.js 14.2.3** - App Routerによるモダンな開発
- **TypeScript** - 型安全な開発環境
- **Tailwind CSS** - ユーティリティファーストCSS
- **Framer Motion** - 高性能アニメーションライブラリ

### アニメーション & エフェクト
- **Lenis** - スムーススクロール
- **React Intersection Observer** - ビューポート検出
- **React Parallax Tilt** - 3Dチルトエフェクト
- **React Spring** - 物理ベースアニメーション

### 開発ツール
- **ESLint** - コード品質管理
- **PostCSS** - CSS処理
- **Class Variance Authority** - コンポーネントバリアント管理

## 🚀 クイックスタート

### 必要要件
- Node.js 18.0.0以上
- npm または yarn

### インストール

\`\`\`bash
# リポジトリのクローン
git clone https://github.com/[username]/claude-code-lp.git
cd claude-code-lp

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
\`\`\`

開発サーバーが [http://localhost:3000](http://localhost:3000) で起動します。

### ビルド

\`\`\`bash
# プロダクションビルド
npm run build

# プロダクションサーバーの起動
npm start
\`\`\`

## 📁 プロジェクト構成

\`\`\`
claude-code-lp/
├── app/                    # Next.js App Router
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # メインページ
├── components/             # Reactコンポーネント
│   ├── effects/           # エフェクトコンポーネント
│   │   ├── MouseFollower.tsx
│   │   ├── ParticleField.tsx
│   │   └── SmoothScroll.tsx
│   ├── hero/              # ヒーローセクション
│   │   ├── AdvancedHeroBackground.tsx
│   │   └── AdvancedHeroContent.tsx
│   ├── premium/           # プレミアムコンポーネント
│   │   ├── InteractiveStats.tsx
│   │   └── TestimonialSection.tsx
│   ├── ui/                # UIコンポーネント
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Section.tsx
│   └── ...                # その他のセクション
├── lib/                   # ユーティリティ
│   └── utils.ts
└── public/                # 静的ファイル
\`\`\`

## 🎨 カスタマイズ

### カラーパレット
\`tailwind.config.ts\`でカスタムカラーを設定:

\`\`\`typescript
colors: {
  'primary': {
    500: '#3b82f6', // Blue
    600: '#2563eb',
  },
  'secondary': {
    500: '#a855f7', // Purple
    600: '#9333ea',
  },
  'accent': {
    500: '#eab308', // Yellow
    600: '#ca8a04',
  },
}
\`\`\`

### アニメーション設定
\`components/effects/\`内のファイルでパーティクルやマウスフォロワーの設定を調整できます。

## 🔧 パフォーマンス

- **Lighthouse Score**: 95+
- **ビルドサイズ**: 79.3kB (gzip圧縮後)
- **First Load JS**: 166kB
- **TTI**: 1.5秒以下

## 📱 ブラウザサポート

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)
- モバイルブラウザ (iOS Safari, Chrome Mobile)

## 🤝 コントリビューション

1. フォークしてブランチを作成
2. 機能を実装・バグを修正
3. コードをコミット
4. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは[MIT License](LICENSE)の下で公開されています。

## 🙏 謝辞

- [Next.js](https://nextjs.org/) - 素晴らしいReactフレームワーク
- [Framer Motion](https://www.framer.com/motion/) - 優れたアニメーションライブラリ
- [Tailwind CSS](https://tailwindcss.com/) - 直感的なCSSフレームワーク
- [Vercel](https://vercel.com/) - 最高のデプロイメントプラットフォーム

---

**Made with ❤️ for the future of programming education**

Claude Code マスター講座で、AIプログラミングの新時代を体験しよう！