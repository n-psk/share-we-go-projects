# Material-UI Versions

<p class="description">このページに戻って、読んでいるドキュメントのバージョンをいつでも切り替えることができます。</p>

## 安定バージョン

本番環境では最新バージョンをお勧めします。

{{"demo": "pages/versions/StableVersions.js", "hideHeader": true}}

## 最新バージョン

ここには、最新の未発表の文書とコードがあります。 これを使用して、変更点を確認し、Material-UIの貢献者により良いフィードバックを提供できます。

{{"demo": "pages/versions/LatestVersions.js", "hideHeader": true}}

## バージョン管理戦略

Materials-UIライブラリから**stability**が必要であることは認識しています。 安定性により、再利用可能なコンポーネントとライブラリ、チュートリアル、ツール、および学習プラクティスが予期せず陳腐化することがなくなります。 Material-UIを取り巻くエコシステムが繁栄するには、安定性が不可欠です。

訳文 このドキュメントには、安定性とバランスのとれた最先端のUIライブラリを提供するために**従うプラクティス**が含まれています。 将来の変更が常に予測可能な方法で導入されるように努めています。 Material-UIに依存しているすべての人に、いつ、どのように新しい機能が追加されたかを知ってもらい、古い機能が削除されたときに十分な準備をしてもらいます。

訳文 Material-UIは厳密に[Semantic Versioning 2.0. 0](https://semver.org/)に従います。 Material-UIのバージョン番号には3つの部分があります：` major.minor.patch ` 。 バージョン番号は、リリースに含まれる変更のレベルに基づいて増分されます。

- **メジャーリリース**　には、重要な新機能が含まれています。一部の機能は含まれていますが、アップデート中の開発者支援は最小限に抑えられます。 新しいメジャーリリースに更新するときは、更新スクリプトの実行、コードのリファクタリング、追加テストの実行、および新しいAPIの学習が必要になる場合があります。
- **マイナーリリース**　重要な新機能が含まれています。 マイナーリリースは完全に下位互換性がある; アップデート中に開発者の支援は必要ありませんが、必要に応じて、リリースで追加された新しいAPI、機能、および機能を使用するようにアプリケーションとライブラリを変更できます。
- **パッチリリース**　リスクが低く、バグ修正と小さな新機能が含まれています。 更新中に開発者の支援は必要ありません。

## リリース頻度

Material-UIの継続的な進化に合わせて更新を計画および調整できるように、定期的なリリーススケジュールに取り組んでいます。

一般的に、次のリリースサイクルが期待できます。

- **メジャー** 6〜12か月ごとにリリースします。
- 1-3 **マイナー**各メジャーリリースのリリース。
- **パッチ**毎週リリース（緊急のバグ修正のためいつでも）。

## リリーススケジュール

> 免責事項：日付は一般的なガイダンスとして提供されており、必要に応じて高品質のコードの配信を確保するために調整される場合があります。

| Date       | Version                    |
|:---------- |:-------------------------- |
| May 2018 ✅ | `@material-ui/core` v1.0.0 |
| May 2019 ✅ | `@material-ui/core` v4.0.0 |
| ? ⏳        | `@material-ui/core` v5.0.0 |


詳細な概要については、[マイルストーン](https://github.com/mui-org/material-ui/milestones)を参照してください。

## サポートポリシー

Material-UIの最新バージョンのみをサポートしています。 [ LTSを提供するリソースがまだありません](https://en.wikipedia.org/wiki/Long-term_support)リリース。

## 廃止予定

時々**「重大な変更」 ** 、一部のAPIおよび機能のサポートの削除などが必要です。

これらの移行をできるだけ簡単にするために、次の2つのコミットメントを行っています。

- 重大な変更の数を最小限に抑え、可能な場合は移行ツールを提供するために努力しています。
- ここに記載されているサポート終了ポリシーに準拠しているため、アプリを最新のAPIとベストプラクティスに更新する時間があります。

更新するための十分な時間と明確なパスを確保するために、以下のポリシーを非推奨とします。

- 非推奨の機能は、変更ログで、可能であれば実行時に警告付きでアナウンスします。
- 非推奨を発表するとき、推奨される更新パスも発表します。
- 非推奨期間中の安定したAPIの既存の使用をサポートしているため、その期間中もコードは機能し続けます。
- 私たちはメジャーリリースであなたのアプリに変更を必要とするピア依存性アップデート(React) のみを行います。