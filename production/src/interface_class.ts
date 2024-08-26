interface UserI {
  name: string;
  email: string;
}

interface Hobby {
  hName: string;
}

class UserClassI implements UserI, Hobby {
  constructor(
    public name: string,
    public email: string,
    public hName: string
  ) {}
}
