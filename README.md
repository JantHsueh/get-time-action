# Get Time Action

Get the time in the specified time zone

## Example usage


```yaml
      - name: Get Time
        id: time
        uses: JantHsueh/get-time-action@master
        with:
          timeZone: 8
```

## Inputs

| Parameter  | Required | Info                                                         |
| ---------- | -------- | ------------------------------------------------------------ |
| `timeZone` | `true`   | time Zone  Default: 8 ,East is positive and West is negative. e.g.: UTC/GMT+08:00 set timeZone: 8 |


## Outputs



| Parameter   | Info                                                         |
| ---------- | ------------------------------------------------------------ |
| `time`   | time in the specified time zone|



## License

[MIT](LICENSE)
