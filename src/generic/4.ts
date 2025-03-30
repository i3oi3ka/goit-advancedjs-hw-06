/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {
    this.props = props;
  }
}

interface PageProps {
  title: string;
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
